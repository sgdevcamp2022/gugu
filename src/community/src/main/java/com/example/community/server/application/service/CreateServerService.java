package com.example.community.server.application.service;

import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.CreateServerUseCase;
import com.example.community.server.application.port.out.RecordServerStatePort;
import com.example.community.server.domain.Server;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateServerService implements CreateServerUseCase {
    private final RecordServerStatePort recordServerStatePort;

    @Override
    public boolean createServer(CreateServerCommand command) {
        Server server = new Server(command.getServerName(), command.getImage());
        recordServerStatePort.saveServer(server);
        return true;
    }
}