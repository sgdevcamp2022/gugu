package com.example.community.user.application.port.out;

public interface LoadUserStatePort {
    boolean existByEmail(String email);

    boolean existByUsername(String username);
}
