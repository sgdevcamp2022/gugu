package com.example.community.channel.application.port.out;

import com.example.community.channel.application.port.in.CreateChannelCommand;
import com.example.community.channel.application.port.in.UpdateChannelCommand;

public interface RecordChannelStatePort {
    void saveChannel(Integer serverId, Integer categoryId, CreateChannelCommand command);

    void updateChannel(Integer id, UpdateChannelCommand command);
}
