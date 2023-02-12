package com.example.community.channel.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Channel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String channelName;
    private Character channelType;
    private Boolean isPrivate;
    private String description;
    private Integer serverId;
    private Integer categoryId;

    public static Channel withId(Integer id, String channelName, Character channelType, Boolean isPrivate, String description, Integer serverId, Integer categoryId) {
        return Channel.builder()
                .id(id)
                .channelName(channelName)
                .channelType(channelType)
                .isPrivate(isPrivate)
                .description(description)
                .serverId(serverId)
                .categoryId(categoryId)
                .build();
    }
}
