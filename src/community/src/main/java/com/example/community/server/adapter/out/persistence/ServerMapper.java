package com.example.community.server.adapter.out.persistence;

import com.example.community.server.domain.Server;
import org.springframework.stereotype.Component;

@Component
public class ServerMapper {
    ServerJpaEntity mapToJpaEntity(Server server) {
        return new ServerJpaEntity(server.getServerName(), server.getServerImage());
    }
}
