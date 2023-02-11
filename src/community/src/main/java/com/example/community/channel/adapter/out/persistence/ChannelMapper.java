package com.example.community.channel.adapter.out.persistence;

import com.example.community.category.adapter.out.persistence.CategoryJpaEntity;
import com.example.community.channel.domain.Channel;
import com.example.community.server.adapter.out.persistence.ServerJpaEntity;
import org.springframework.stereotype.Component;

@Component
public class ChannelMapper {
    ChannelJpaEntity mapToJpaEntity(Channel channel) {
        int isPrivate = 1;
        if (!channel.getIsPrivate()) {
            isPrivate = 0;
        }

        int channelType = 1;    // channelType: 1-> t(채팅), 0->v(음성)
        if (channel.getChannelType() == 'v') {
            channelType = 0;
        }

        ServerJpaEntity serverJpaEntity = new ServerJpaEntity();
        serverJpaEntity.setServer_id(channel.getServerId());

        if (channel.getCategoryId() == null) {
            return ChannelJpaEntity.builder()
                    .channel_name(channel.getChannelName())
                    .channel_type(channelType)
                    .is_private(isPrivate)
                    .server(serverJpaEntity)
                    .build();
        }

        CategoryJpaEntity categoryJpaEntity = new CategoryJpaEntity();
        categoryJpaEntity.setId(channel.getCategoryId());

        return ChannelJpaEntity.builder()
                .channel_name(channel.getChannelName())
                .channel_type(channelType)
                .is_private(isPrivate)
                .server(serverJpaEntity)
                .category(categoryJpaEntity)
                .build();
    }

    Channel mapToDomainEntity(ChannelJpaEntity entity) {
        Boolean isPrivate = true;
        if (entity.getIs_private() == 0) {
            isPrivate = false;
        }

        Character channelType = 't';
        if (entity.getChannel_type() == 0) {
            channelType = 'v';
        }

        return Channel.withId(
                entity.getId(),
                entity.getChannel_name(),
                channelType,
                isPrivate,
                entity.getDescription(),
                entity.getServer().getServer_id(),
                entity.getCategory().getId());
    }
}
