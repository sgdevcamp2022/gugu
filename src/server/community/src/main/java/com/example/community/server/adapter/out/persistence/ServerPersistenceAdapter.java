package com.example.community.server.adapter.out.persistence;

import com.example.community.server.application.port.in.CreateServerCommand;
import com.example.community.server.application.port.in.UpdateServerCommand;
import com.example.community.server.application.port.out.LoadServerStatePort;
import com.example.community.server.application.port.out.RecordServerStatePort;
import com.example.community.server.domain.Server;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
@Component
public class ServerPersistenceAdapter implements RecordServerStatePort, LoadServerStatePort {
    private final ServerRepository serverRepository;
    private final ServerMapper serverMapper;

    @Override
    public void saveServer(CreateServerCommand command) {
        Server server = new Server(command.getServerName(), command.getImage());
        serverRepository.save(serverMapper.mapToJpaEntity(server));
    }

    @Override
    public Server loadServer(Integer serverId) {
        ServerJpaEntity serverJpaEntity = serverRepository.findById(serverId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 서버 id입니다."));
        return serverMapper.mapToDomainEntity(serverJpaEntity);
    }

    @Override
    public void updateServer(Integer serverId, UpdateServerCommand command) {
        ServerJpaEntity serverJpaEntity = serverRepository.findById(serverId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 서버 id입니다."));
        serverJpaEntity.setServer_name(command.getServerName());
        serverJpaEntity.setImage(serverJpaEntity.getImage());
        serverRepository.save(serverJpaEntity);
    }

    @Override
    public boolean existsByServerId(Integer serverId) {
        if (!serverRepository.existsById(serverId)) {
            throw new EntityNotFoundException("존재하지 않는 서버 id입니다.");
        }
        return true;
    }
}
