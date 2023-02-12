package com.example.community.server.adapter.out.persistence;

import com.example.community.server.application.port.in.ModifyServerCommand;
import com.example.community.server.application.port.out.LoadServerStatePort;
import com.example.community.server.application.port.out.RecordServerStatePort;
import com.example.community.server.application.port.out.UpdateServerStatePort;
import com.example.community.server.domain.Server;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
@Component
public class ServerPersistenceAdapter implements
        RecordServerStatePort,
        LoadServerStatePort,
        UpdateServerStatePort {
    private final ServerRepository serverRepository;
    private final ServerMapper serverMapper;

    @Override
    public void saveServer(Server server) {
        serverRepository.save(serverMapper.mapToJpaEntity(server));
    }

    @Override
    public Server loadServer(int id, ModifyServerCommand modifyServer) {
        ServerJpaEntity server = serverRepository.findById(id).orElseThrow(() -> new EntityNotFoundException());
        server.setServer_name(modifyServer.getServerName());
        server.setImage(modifyServer.getImage());
        return serverMapper.mapToDomainEntity(server);
    }

    @Override
    public boolean existsByServerId(Integer serverId) {
        if (!serverRepository.existsById(serverId)) {
            throw new EntityNotFoundException("존재하지 않는 서버 id입니다.");
        }
        return true;
    }

    @Override
    public void updateServer(Server server) {
        serverRepository.save(serverMapper.mapToJpaEntity(server));
    }
}
