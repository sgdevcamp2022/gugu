package com.example.community.channel.application.port.out;

import com.example.community.channel.application.port.in.UpdateChannelCommand;
import com.example.community.channel.domain.Channel;

public interface LoadChannelStatePort {
    Channel loadChannel(Integer id);
}
