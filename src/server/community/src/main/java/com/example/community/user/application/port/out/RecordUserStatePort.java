package com.example.community.user.application.port.out;

import com.example.community.user.domain.User;

public interface RecordUserStatePort {
    void saveUser(User user);

    void updateRefreshToken(Integer userId, String refreshToken);

    String reissueRefreshToken(Integer userId);
}
