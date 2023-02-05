package com.example.community.server.adapter.out.persistence;

import com.example.community.server.application.port.out.RecordServerStatePort;
import com.example.community.server.domain.Server;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class ServerPersistenceAdapter implements RecordServerStatePort {
    private final ServerRepository serverRepository;
    private final ServerMapper serverMapper;

    @Override
    public void saveServer(Server server) {
        serverRepository.save(serverMapper.mapToJpaEntity(server));
    }
}
