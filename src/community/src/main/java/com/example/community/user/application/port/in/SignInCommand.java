package com.example.community.user.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.NotNull;

@Getter
public class SignInCommand extends SelfValidating<SignInCommand> {
    @NotNull
    private final String email;

    @NotNull
    private final String password;

    public SignInCommand(String email, String password) {
        this.email = email;
        this.password = password;
        this.validateSelf();
    }
}