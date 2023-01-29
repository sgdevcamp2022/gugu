package com.example.community.user.application.port.out;

import com.example.community.user.domain.User;

public interface RecordUserStatePort {
    void saveUser(User user);

    boolean checkEmailDuplicated(String email);

    boolean checkUsernameDuplicated(String username);
}
