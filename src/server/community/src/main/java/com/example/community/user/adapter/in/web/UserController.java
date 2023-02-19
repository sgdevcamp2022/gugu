package com.example.community.user.adapter.in.web;

import com.example.community.user.adapter.out.persistence.*;
import com.example.community.user.application.port.in.RecordUserUseCase;
import com.example.community.user.application.port.in.SignInCommand;
import com.example.community.user.application.port.in.SignInUserUseCase;
import com.example.community.user.application.port.in.SignUpCommand;
import com.example.community.util.JwtTokenProvider;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final RecordUserUseCase recordUserUseCase;
    private final SignInUserUseCase signInUserUseCase;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/users")
    public ResponseEntity<ResultDto> signUpUser(@RequestBody SignUpRequestDto signUpUser) {
        String encodedPassword = passwordEncoder.encode(signUpUser.getPassword());
        SignUpCommand command = new SignUpCommand(
                signUpUser.getEmail(),
                encodedPassword,
                signUpUser.getUserName(),
                signUpUser.getBirth()
        );
        recordUserUseCase.signUp(command);
        return ResponseEntity.created(URI.create("/user"))
                .body(ResultDto.builder()
                        .code(201)
                        .message("회원 가입이 완료되었습니다.")
                        .build());
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponseDto> signInUser(@RequestBody SignInRequestDto signInUser) {
        SignInCommand command = new SignInCommand(
                signInUser.getEmail(),
                signInUser.getPassword());
        signInUserUseCase.signIn(command);

        Integer userId = signInUserUseCase.loadUserId(command.getEmail());

        String accessToken = jwtTokenProvider.createAuthToken(userId);
        String refreshToken = jwtTokenProvider.createRefreshToken(userId);

        signInUserUseCase.updateRefreshToken(userId, refreshToken);

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, refreshToken)
                .body(UserResponseDto.builder()
                        .code(200)
                        .message("로그인이 완료되었습니다.")
                        .info(accessToken)
                        .build());
    }

    @GetMapping("/signout")
    public ResponseEntity<ResultDto> signOutUser(HttpServletRequest request) {
        String refreshToken = request.getHeader("Cookie");
        signInUserUseCase.signOutUser(refreshToken);

        return ResponseEntity.ok()
                .body(ResultDto.builder()
                        .code(200)
                        .message("로그아웃되었습니다.")
                        .build());
    }

    @GetMapping("/refresh")
    public ResponseEntity<UserResponseDto> refreshToken(HttpServletRequest request) {
        String refreshToken = request.getHeader("Cookie");

        TokenDto tokenDto = signInUserUseCase.reissueToken(refreshToken);

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, tokenDto.getRefreshToken())
                .body(UserResponseDto.builder()
                        .code(200)
                        .message("토큰 재발급이 완료되었습니다.")
                        .info(tokenDto.getAccessToken())
                        .build());
    }

    @GetMapping("/user-info")
    public ResponseEntity<UserResponseDto> loadUsername(HttpServletRequest request) {
        String refreshToken = request.getHeader("Cookie");
        String username = signInUserUseCase.loadUsername(refreshToken);
        return ResponseEntity.ok()
                .body(UserResponseDto.builder()
                        .code(200)
                        .message("사용자 이름을 불러왔습니다.")
                        .info(username)
                        .build());
    }
}
