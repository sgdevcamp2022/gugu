package com.gugu.media.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gugu.media.application.service.RoomService;
import com.gugu.media.domain.Room;
import com.gugu.media.domain.WebSocketMessage;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.*;


@Slf4j
@Component
public class SignalingHandler extends TextWebSocketHandler {
    private static final String ERROR_MESSAGE = "[Handler] Error : ";
    @Autowired private RoomService roomService;

    List<WebSocketSession> sessions = new LinkedList<WebSocketSession>();
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final ObjectMapper objectMapper = new ObjectMapper();

    private Map<String, Room> sessionMap = new HashMap<>();

    private static final String MSG_TYPE_TEXT = "text";
    // SDP Offer message
    private static final String MSG_TYPE_OFFER = "offer";
    // SDP Answer message
    private static final String MSG_TYPE_ANSWER = "answer";
    // New ICE Candidate message
    private static final String MSG_TYPE_ICE = "ice";
    // join room data message
    private static final String MSG_TYPE_JOIN = "join";
    // leave room data message
    private static final String MSG_TYPE_LEAVE = "leave";
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        super.afterConnectionEstablished(session);
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage textMessage) throws Exception{        // a message has been received
        try {
        WebSocketMessage message = objectMapper.readValue(textMessage.getPayload(), WebSocketMessage.class);
        logger.debug("[ws] Message of {} type from {} received", message.getType(), message.getFrom());
        String userName = message.getFrom(); // origin of the message
        String data = message.getData(); // payload

        Room room;

        switch (message.getType()) {
            case MSG_TYPE_TEXT:
                logger.debug("[ws] Text message: {}", message.getData());
                break;
            case MSG_TYPE_OFFER:
                log.info(message.toString());
                sendMessage(session,message);
            case MSG_TYPE_ANSWER:
                log.info(message.toString());
                sendMessage(session,message);

            case MSG_TYPE_ICE:
                Object candidate = message.getCandidate();
                Object sdp = message.getSdp();
                logger.debug("[ws] Signal: {}",
                        candidate != null
                                ? candidate.toString().substring(0, 64)
                                : sdp.toString().substring(0, 64));

                Room rm = sessionMap.get(session.getId());
                if (rm != null) {
                    Map<String, WebSocketSession> clients = roomService.getClients(rm);
                    for(Map.Entry<String, WebSocketSession> client : clients.entrySet())  {
                        // send messages to all clients except current user
                        if (!client.getKey().equals(userName)) {
                            sendMessage(client.getValue(),
                                    new WebSocketMessage(
                                            userName,
                                            message.getType(),
                                            data,
                                            candidate,
                                            sdp));
                        }
                    }
                }
                break;

            // identify user and their opponent
            case MSG_TYPE_JOIN:
                // message.data contains connected room id
                logger.debug("[ws] {} has joined Room: #{}", userName, message.getData());
                room = roomService.findRoomByStringId(data)
                        .orElseThrow(() -> new IOException("Invalid room number received!"));
                // add client to the Room clients list
                roomService.addClient(room, userName, session);
                sessionMap.put(session.getId(), room);
                break;

            case MSG_TYPE_LEAVE:
                // message data contains connected room id
                logger.debug("[ws] {} is going to leave Room: #{}", userName, message.getData());
                // room id taken by session id
                room = sessionMap.get(session.getId());
                // remove the client which leaves from the Room clients list
                Optional<String> client = roomService.getClients(room).entrySet().stream()
                        .filter(entry -> Objects.equals(entry.getValue().getId(), session.getId()))
                        .map(Map.Entry::getKey)
                        .findAny();
                client.ifPresent(c -> roomService.removeClientByName(room, c));
                break;

            // something should be wrong with the received message, since it's type is unrecognizable
            default:
                logger.debug("[ws] Type of the received message {} is undefined!", message.getType());
                // handle this if needed
        }

    } catch (IOException e) {
        logger.debug("An error occured: {}", e.getMessage());
    }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
        super.afterConnectionClosed(session, status);
    }

    private void sendMessage(WebSocketSession session, WebSocketMessage message) {
        try {
            String json = objectMapper.writeValueAsString(message);
            session.sendMessage(new TextMessage(json));
        } catch (IOException e) {
            logger.debug("An error occured: {}", e.getMessage());
        }
    }
}
