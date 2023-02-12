package com.example.community.user.adapter.in.web;

import com.example.community.user.adapter.out.persistence.SignUpRequestDto;
import com.example.community.user.application.port.in.RecordUserUseCase;
import com.example.community.user.application.port.in.SignUpCommand;
import com.example.community.util.JwtTokenProvider;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final RecordUserUseCase recordUserUseCase;
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
    public ResponseEntity<TokenResponse> signInUser(@RequestBody SignInRequestDto signInUser) {
        SignInCommand command = new SignInCommand(
                signInUser.getEmail(),
                signInUser.getPassword());
        signInUseCase.signIn(command);

        String token = jwtTokenProvider.createToken(signInUser.getEmail());

        return ResponseEntity.ok()
                .body(new TokenResponse(token, "bearer"));
    }
}
