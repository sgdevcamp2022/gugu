package com.gugu.media.application.service;

import com.gugu.media.domain.Room;
import com.gugu.media.utils.Parser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.WebSocketSession;

import java.util.*;

@RequiredArgsConstructor
@Service
public class RoomServiceImpl implements RoomService{
    private final Parser parser;
    private final Set<Room> rooms = new TreeSet<>(Comparator.comparing(Room::getId));

    @Override
    public Set<Room> getRooms() {
        final Set<Room> defensiveCopy  = new TreeSet<>(Comparator.comparing(Room::getId));
        defensiveCopy.addAll(rooms);
        return defensiveCopy;
    }
    @Override
    public Boolean addRoom(final Room room) {
        return rooms.add(room);
    }
    @Override
    public Map<String, WebSocketSession> getClients(final Room room) {
        return Optional.ofNullable(room)
                .map(r -> Collections.unmodifiableMap(r.getClients()))
                .orElse(Collections.emptyMap());
    }
    @Override
    public Optional<Room> findRoomByStringId(String sid) {
        return rooms.stream().filter(r -> r.getId().equals(parser.parseId(sid).get())).findAny();
    }

    @Override
    public WebSocketSession addClient(final Room room, final String name, final WebSocketSession session) {
        return room.getClients().put(name, session);
    }


    @Override
    public WebSocketSession removeClientByName(final Room room, final String name) {
        return room.getClients().remove(name);
    }
}
