package com.example.community.server.application.port.in;

public interface ModifyServerUseCase {
    boolean modifyServer(int id, ModifyServerCommand command);
}