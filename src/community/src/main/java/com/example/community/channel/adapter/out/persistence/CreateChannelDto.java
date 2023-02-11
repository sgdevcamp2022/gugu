package com.example.community.channel.adapter.out.persistence;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CreateChannelDto {
    private String channelName;
    private Character channelType;
    private Boolean isPrivate;
}
