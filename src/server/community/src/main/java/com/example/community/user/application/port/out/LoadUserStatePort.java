package com.example.community.user.application.port.out;

import com.example.community.user.adapter.out.persistence.SignInRequestDto;

public interface LoadUserStatePort {
    boolean existByEmail(String email);

    boolean existByUsername(String username);

    SignInRequestDto loadByEmail(String email);
}
