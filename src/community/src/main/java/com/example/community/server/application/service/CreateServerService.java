package com.example.community.server.application.service;

import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.CreateServerUserCase;
import com.example.community.server.application.port.out.RecordServerStatePort;
import com.example.community.server.domain.Server;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateServerService implements CreateServerUserCase {
    private final RecordServerStatePort recordServerStatePort;

    @Override
    public boolean createServer(CreateServerCommand command) {
        Server server = new Server(command.getServerName());
        recordServerStatePort.saveServer(server);
        return true;
    }
}