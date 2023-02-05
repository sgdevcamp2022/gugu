package com.example.community.server.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
public class CreateServerCommand extends SelfValidating<CreateServerCommand> {
    @NotNull
    @Size(max = 15, message="서버 이름은 15글자 이하여야 합니다.")
    private final String serverName;

    public CreateServerCommand(String serverName) {
        this.serverName = serverName;
        this.validateSelf();
    }
}