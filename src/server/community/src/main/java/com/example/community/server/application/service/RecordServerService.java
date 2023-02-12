package com.example.community.server.application.service;

import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.RecordServerUseCase;
import com.example.community.server.application.port.in.UpdateServerCommand;
import com.example.community.server.application.port.out.RecordServerStatePort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecordServerService implements RecordServerUseCase {
    private final RecordServerStatePort recordServerStatePort;

    @Override
    public boolean createServer(CreateServerCommand command) {
        recordServerStatePort.saveServer(command);
        return true;
    }

    @Override
    public boolean updateServer(Integer serverId, UpdateServerCommand command) {
        recordServerStatePort.updateServer(serverId, command);
        return true;
    }
}