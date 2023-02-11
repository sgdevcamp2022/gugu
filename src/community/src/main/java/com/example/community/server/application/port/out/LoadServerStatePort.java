package com.example.community.server.application.port.out;

import com.example.community.server.domain.Server;

public interface LoadServerStatePort {
    Server loadServer(Integer serverId);

    boolean existsByServerId(Integer serverId);
}
