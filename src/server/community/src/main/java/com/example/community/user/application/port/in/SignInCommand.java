package com.example.community.user.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
public class SignInCommand extends SelfValidating<SignInCommand> {
    @NotNull
    @Email(message = "잘못된 이메일 형식입니다.")
    private final String email;

    @NotNull
    private final String password;

    public SignInCommand(String email, String password) {
        this.email = email;
        this.password = password;
        this.validateSelf();
    }
}