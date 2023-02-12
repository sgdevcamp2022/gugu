package com.example.community.user.application.port.in;

public interface RecordUserUseCase {
    boolean signUp(SignUpCommand command);
}
