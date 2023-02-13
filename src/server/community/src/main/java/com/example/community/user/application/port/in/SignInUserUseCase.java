package com.example.community.user.application.port.in;

public interface SignInUserUseCase {
    boolean signIn(SignInCommand signInCommand);

    boolean updateRefreshToken(Integer userId, String refreshToken);

    Integer loadUserId(String email);
}