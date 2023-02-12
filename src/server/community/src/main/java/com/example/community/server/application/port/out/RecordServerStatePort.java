package com.example.community.server.application.port.out;

import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.UpdateServerCommand;

public interface RecordServerStatePort {
    void saveServer(CreateServerCommand server);

    void updateServer(Integer id, UpdateServerCommand server);
}