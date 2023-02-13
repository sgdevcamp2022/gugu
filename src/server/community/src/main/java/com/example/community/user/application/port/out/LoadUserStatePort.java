package com.example.community.user.application.port.out;

import com.example.community.user.adapter.out.persistence.LoadSignInUserDto;

public interface LoadUserStatePort {
    boolean existByEmail(String email);

    boolean existByUsername(String username);

    boolean checkUserAccountExist(String email);

    LoadSignInUserDto loadByEmail(String email);

    Integer loadUserIdByEmail(String email);
}
