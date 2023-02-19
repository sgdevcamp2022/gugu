package com.example.community.user.application.service;

import com.example.community.exception.BadCredentialsException;
import com.example.community.exception.TokenValidationException;
import com.example.community.user.adapter.out.persistence.LoadSignInUserDto;
import com.example.community.user.adapter.out.persistence.TokenDto;
import com.example.community.user.application.port.in.SignInCommand;
import com.example.community.user.application.port.in.SignInUserUseCase;
import com.example.community.user.application.port.out.LoadUserStatePort;
import com.example.community.user.application.port.out.RecordUserStatePort;
import com.example.community.util.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountSignInService implements SignInUserUseCase {
    private final LoadUserStatePort loadUserStatePort;
    private final RecordUserStatePort recordUserStatePort;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public boolean signIn(SignInCommand command) {
        loadUserStatePort.checkUserAccountExist(command.getEmail());
        LoadSignInUserDto loadSignInUserDto = loadUserStatePort.loadByEmail(command.getEmail());
        checkPassword(command.getPassword(), loadSignInUserDto.getPassword());
        return true;
    }

    @Override
    public boolean updateRefreshToken(Integer userId, String refreshToken) {
        recordUserStatePort.updateRefreshToken(userId, refreshToken);
        return true;
    }

    @Override
    public Integer loadUserId(String email) {
        return loadUserStatePort.loadUserIdByEmail(email);
    }

    @Override
    public TokenDto reissueToken(String refreshToken) {
        Integer userId = jwtTokenProvider.parseJwtToken(refreshToken);

        if (!refreshToken.equals(loadUserStatePort.loadRefreshTokenByUserId(userId))) {
            throw new TokenValidationException("토큰이 유효하지 않습니다.");
        }

        String reissuedAccessToken = jwtTokenProvider.createAuthToken(userId);
        String reissuedRefreshToken = jwtTokenProvider.createRefreshToken(userId);

        recordUserStatePort.updateRefreshToken(userId, reissuedRefreshToken);
        TokenDto token = new TokenDto(reissuedAccessToken, reissuedRefreshToken);
        return token;
    }

    private void checkPassword(String password, String encodedPassword) {
        boolean isMatch = passwordEncoder.matches(password, encodedPassword);
        if (!isMatch) {
            throw new BadCredentialsException("잘못된 아이디 혹은 비밀번호입니다.");
        }
    }
}
