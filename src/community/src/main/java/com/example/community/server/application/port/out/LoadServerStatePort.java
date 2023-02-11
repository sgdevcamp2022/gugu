package com.example.community.server.application.port.out;

import com.example.community.server.application.port.in.ModifyServerCommand;
import com.example.community.server.domain.Server;

public interface LoadServerStatePort {
    Server loadServer(int id, ModifyServerCommand modifyServer);

    boolean existsByServerId(Integer serverId);
}
