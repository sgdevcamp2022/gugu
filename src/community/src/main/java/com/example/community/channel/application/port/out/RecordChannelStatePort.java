package com.example.community.channel.application.port.out;

import com.example.community.channel.domain.Channel;

public interface RecordChannelStatePort {
    void saveChannel(Channel channel);

    void updateChannel(Integer id, Channel channel);
}
