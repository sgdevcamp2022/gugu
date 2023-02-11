package com.example.community.channel.application.service;

import com.example.community.category.application.port.out.LoadCategoryStatePort;
import com.example.community.channel.application.port.in.CreateChannelCommand;
import com.example.community.channel.application.port.in.RecordChannelUseCase;
import com.example.community.channel.application.port.out.RecordChannelStatePort;
import com.example.community.channel.domain.Channel;
import com.example.community.server.application.port.out.LoadServerStatePort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecordChannelService implements RecordChannelUseCase {
    private final RecordChannelStatePort recordChannelStatePort;
    private final LoadCategoryStatePort loadCategoryStatePort;
    private final LoadServerStatePort loadServerStatePort;

    @Override
    public boolean createChannel(Integer serverId, Integer categoryId, CreateChannelCommand command) {
        loadServerStatePort.existsByServerId(serverId);
        loadCategoryStatePort.existsByCategoryId(categoryId);

        Channel channel = Channel.builder()
                .channelName(command.getChannelName())
                .channelType(command.getChannelType())
                .isPrivate(command.getIsPrivate())
                .serverId(serverId)
                .categoryId(categoryId)
                .build();
        recordChannelStatePort.saveChannel(channel);
        return true;
    }
}