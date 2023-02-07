package com.example.community.server.application.service;

import com.example.community.server.adapter.out.persistence.ModifyServerDto;
import com.example.community.server.application.port.in.ModifyServerCommand;
import com.example.community.server.application.port.in.ModifyServerUseCase;
import com.example.community.server.application.port.out.LoadServerStatePort;
import com.example.community.server.application.port.out.UpdateServerStatePort;
import com.example.community.server.domain.Server;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ModifyServerService implements ModifyServerUseCase {
    private final UpdateServerStatePort updateServerStatePort;
    private final LoadServerStatePort loadServerStatePort;

    @Override
    public boolean modifyServer(int id, ModifyServerCommand modifyServer) {
        Server server = loadServerStatePort.loadServer(id, modifyServer);
        updateServerStatePort.updateServer(server);
        return true;
    }
}
