package com.example.community.channel.application.port.in;

public interface RecordChannelUseCase {
    boolean createChannel(Integer serverId, Integer categoryId, CreateChannelCommand command);
}