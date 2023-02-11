package com.example.community.server.application.port.in;

public interface RecordServerUseCase {
    boolean createServer(CreateServerCommand command);

    boolean updateServer(Integer id, UpdateServerCommand command);
}