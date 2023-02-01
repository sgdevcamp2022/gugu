package com.gugu.media.application.service;

import com.gugu.media.domain.Room;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.WebSocketSession;

import java.util.Map;
import java.util.Optional;
import java.util.Set;

public interface RoomService {
    Set<Room> getRooms();

    Boolean addRoom(Room room);

    Map<String, WebSocketSession> getClients(Room rm);

    Optional<Room> findRoomByStringId(String data);

    WebSocketSession addClient(Room room, String userName, WebSocketSession session);

    WebSocketSession removeClientByName(Room room, String c);
}
