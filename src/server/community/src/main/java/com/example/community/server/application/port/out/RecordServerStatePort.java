package com.example.community.server.application.port.out;

import com.example.community.server.domain.Server;

public interface RecordServerStatePort {
    void saveServer(Server server);
}