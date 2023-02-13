package com.example.community.user.application.service;

import com.example.community.user.adapter.out.persistence.SignInRequestDto;
import com.example.community.user.application.port.in.SignInCommand;
import com.example.community.user.application.port.in.SignInUseCase;
import com.example.community.user.application.port.out.LoadUserStatePort;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountSignInService implements SignInUseCase {
    private final LoadUserStatePort loadUserStatePort;
    private final RecordUserStatePort recordUserStatePort;
    private final PasswordEncoder passwordEncoder;


    @Override
    public boolean updateRefreshToken(Integer userId, String refreshToken) {
        recordUserStatePort.updateRefreshToken(userId, refreshToken);
        return true;
    }

    @Override
    public Integer loadUserId(String email) {
        return loadUserStatePort.loadUserIdByEmail(email);
    }

    private void checkPassword(String password, String encodedPassword) {
        boolean isMatch = passwordEncoder.matches(password, encodedPassword);
        if (!isMatch) {
            throw new IllegalArgumentException("아이디 혹은 비밀번호를 확인하세요.");
        }
    }
}
