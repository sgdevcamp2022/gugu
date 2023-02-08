package com.example.community.server.adapter.out.persistence;

import com.example.community.server.domain.Server;
import org.springframework.stereotype.Component;

@Component
public class ServerMapper {
    ServerJpaEntity mapToJpaEntity(Server server) {
        return new ServerJpaEntity(server.getId(), server.getServerName(), server.getServerImage());
    }

    Server mapToDomainEntity(ServerJpaEntity entity) {
        return Server.withId(entity.getServer_id(), entity.getServer_name(), entity.getImage());
    }
}
