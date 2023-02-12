package com.example.community.user.adapter.in.web;

import com.example.community.user.adapter.out.persistence.SignInRequestDto;
import com.example.community.user.adapter.out.persistence.SignUpRequestDto;
import com.example.community.user.application.port.in.RecordUserUseCase;
import com.example.community.user.application.port.in.SignUpCommand;
import com.example.community.user.application.port.in.SignUpUseCase;
import com.example.community.util.JwtTokenProvider;
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

    @PostMapping("/user")
    public ResponseEntity<String> signUpUser(@RequestBody SignUpRequestDto signUpUser) {
        String encodedPassword = passwordEncoder.encode(signUpUser.getPassword());
        SignUpCommand command = new SignUpCommand(
                signUpUser.getEmail(),
                encodedPassword,
                signUpUser.getUserName(),
                signUpUser.getBirth());

        signUpUseCase.checkEmailDuplication(command.getEmail());
        signUpUseCase.checkUserNameDuplication(command.getUserName());
        signUpUseCase.signUp(command);

        return ResponseEntity.created(URI.create("/user"))
                .body("회원가입을 성공했습니다.");
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
