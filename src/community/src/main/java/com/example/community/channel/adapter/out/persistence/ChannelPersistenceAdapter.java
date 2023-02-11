package com.example.community.channel.adapter.out.persistence;

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
    public void saveChannel(Channel channel) {
        channelRepository.save(channelMapper.mapToJpaEntity(channel));
    }

    @Override
    public void updateChannel(Integer id, Channel channel) {
        ChannelJpaEntity channelJpaEntity = channelRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 채널 id입니다."));
        channelJpaEntity.setChannel_name(channel.getChannelName());
        channelJpaEntity.setDescription(channel.getDescription());
        channelRepository.save(channelJpaEntity);
    }

    @Override
    public Channel loadChannel(Integer id) {
        ChannelJpaEntity channelJpaEntity = channelRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 채널 id입니다."));
        return channelMapper.mapToDomainEntity(channelJpaEntity);
    }
}
