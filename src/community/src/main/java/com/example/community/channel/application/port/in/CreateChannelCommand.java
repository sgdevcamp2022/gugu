package com.example.community.channel.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
public class CreateChannelCommand extends SelfValidating<CreateChannelCommand> {
    @NotNull
    @Size(max = 15, message = "채널 이름은 15글자 이하여야 합니다.")
    private final String channelName;

    @NotNull
    private final Character channelType;

    @NotNull
    private final Boolean isPrivate;

    public CreateChannelCommand(String channelName, Character channelType, Boolean isPrivate) {
        this.channelName = channelName;
        this.channelType = channelType;
        this.isPrivate = isPrivate;
        this.validateSelf();
    }
}
