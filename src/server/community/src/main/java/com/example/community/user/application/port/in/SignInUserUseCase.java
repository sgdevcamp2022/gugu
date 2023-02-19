package com.example.community.user.application.port.in;

import com.example.community.user.adapter.out.persistence.TokenDto;

public interface SignInUserUseCase {
    boolean signIn(SignInCommand signInCommand);

    boolean updateRefreshToken(Integer userId, String refreshToken);

    Integer loadUserId(String email);

    TokenDto reissueToken(String refreshToken);

    boolean signOutUser(String refreshToken);
}