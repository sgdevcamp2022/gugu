package com.example.community.user.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
public class SignUpCommand extends SelfValidating<SignUpCommand> {

    @NotNull
    private final String email;
    @NotNull
    private final String password;

    @NotNull
    private final String userName;
    @NotNull
    private final Date birth;

    public SignUpCommand(String email, String password, String userName, Date birth) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.birth = birth;
        this.validateSelf();
    }
}
