package com.gugu.media;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.gugu.media.application.service.RoomService;
import com.gugu.media.config.SignalingHandler;
import com.gugu.media.domain.Room;
import com.gugu.media.domain.WebSocketMessage;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@WebAppConfiguration
class SignalHandlerTest {
    @Autowired
    private RoomService roomService;
    @Autowired
    private SignalingHandler handler;

    private String name;
    private WebSocketSession session;
    private Room room;

    @BeforeEach
    public void init() {
        Long id = 1L;
        name = UUID.randomUUID().toString();
        session = mock(WebSocketSession.class);
        room = new Room(id);
        roomService.addRoom(room);
    }

    @Test
    void removeClientAfterConnectionClosed() throws Exception {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        WebSocketMessage message = new WebSocketMessage(name, "join", room.getId().toString(), null, null);
        handler.handleMessage(session, new TextMessage(ow.writeValueAsString(message)));
        message = new WebSocketMessage(name, "leave", room.getId().toString(), null, null);
        handler.handleMessage(session, new TextMessage(ow.writeValueAsString(message)));
        handler.afterConnectionClosed(session, CloseStatus.NORMAL);
        assertThat(roomService.getClients(room)).isEmpty();
    }

    @Test
    void isTwoMemberWhenTwoConnection() throws Exception {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        WebSocketMessage message = new WebSocketMessage(name, "join", room.getId().toString(), null, null);
        handler.handleMessage(session, new TextMessage(ow.writeValueAsString(message)));
        WebSocketMessage message2 = new WebSocketMessage(name, "join", room.getId().toString(), null, null);
        handler.handleMessage(session, new TextMessage(ow.writeValueAsString(message2)));
        handler.afterConnectionClosed(session, CloseStatus.NORMAL);
        assertThat(roomService.getClients(room)).hasSize(2);
    }

    @AfterEach
    public void reset() {
        name = null;
        session = null;
        room = null;
    }
}