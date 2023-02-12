package com.example.community.channel.adapter.out.persistence;

import com.example.community.channel.application.port.in.CreateChannelCommand;
import com.example.community.channel.application.port.in.UpdateChannelCommand;
import com.example.community.channel.application.port.out.LoadChannelStatePort;
import com.example.community.channel.application.port.out.RecordChannelStatePort;
import com.example.community.channel.domain.Channel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
@Component
public class ChannelPersistenceAdapter implements RecordChannelStatePort, LoadChannelStatePort {
    private final ChannelRepository channelRepository;
    private final ChannelMapper channelMapper;

    @Override
    public void saveChannel(Integer serverId, Integer categoryId, CreateChannelCommand command) {

        Channel channel = Channel.builder()
                .channelName(command.getChannelName())
                .channelType(command.getChannelType())
                .isPrivate(command.getIsPrivate())
                .serverId(serverId)
                .categoryId(categoryId)
                .build();
        channelRepository.save(channelMapper.mapToJpaEntity(channel));
    }

    @Override
    public void updateChannel(Integer id, UpdateChannelCommand command) {
        ChannelJpaEntity channelJpaEntity = channelRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 채널 id입니다."));
        channelJpaEntity.setChannel_name(command.getChannelName());
        channelJpaEntity.setDescription(command.getDescription());
        channelRepository.save(channelJpaEntity);
    }

    @Override
    public Channel loadChannel(Integer id) {
        ChannelJpaEntity channelJpaEntity = channelRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 채널 id입니다."));
        return channelMapper.mapToDomainEntity(channelJpaEntity);
    }
}
