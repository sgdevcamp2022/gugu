package com.example.community.server.application.port.in;

public interface CreateServerUserCase {
    boolean createServer(CreateServerCommand command);
}