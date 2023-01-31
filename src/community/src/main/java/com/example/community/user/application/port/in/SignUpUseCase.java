package com.example.community.user.application.port.in;

public interface SignUpUseCase {
    boolean signUp(SignUpCommand command);

    void checkUserNameDuplication(String username);

    void checkEmailDuplication(String email);
}
