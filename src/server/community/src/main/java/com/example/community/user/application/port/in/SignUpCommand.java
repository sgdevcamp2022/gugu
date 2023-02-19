package com.example.community.user.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.*;

@Getter
public class SignUpCommand extends SelfValidating<SignUpCommand> {
    @NotNull
    @Email(message = "잘못된 이메일 형식입니다.")
    private final String email;

    // TODO: @password 수정하여 적용할 것
    @NotNull
    private final String password;

    @NotNull
    @Size(max = 15, message = "이름은 10글자 이하여야 합니다.")
    private final String userName;

    @NotNull
    @Pattern(regexp = "^(19|20)\\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$", message = "잘못된 날짜 형식입니다.")
    private final String birth;

    public SignUpCommand(String email, String password, String userName, String birth) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.birth = birth;
        this.validateSelf();
    }
}
