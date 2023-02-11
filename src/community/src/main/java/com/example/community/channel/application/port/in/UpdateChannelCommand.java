package com.example.community.channel.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
public class UpdateChannelCommand extends SelfValidating<UpdateChannelCommand> {
    @NotNull
    @Size(max = 15, message = "채널 이름은 15글자 이하여야 합니다.")
    private final String channelName;

    @Size(max = 1024, message = "채널 설명은 1024글자 이하여야 합니다.")
    private final String description;

    public UpdateChannelCommand(String channelName, String description) {
        this.channelName = channelName;
        this.description = description;
        this.validateSelf();
    }
}
