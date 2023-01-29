package com.example.community.user.adapter.in.web;

import com.example.community.user.adapter.out.persistence.SignUpRequestDto;
import com.example.community.user.application.port.in.SignUpCommand;
import com.example.community.user.application.port.in.SignUpUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final SignUpUseCase signUpUseCase;

    @PostMapping("/user")
    public ResponseEntity<String> signUpUser(@RequestBody SignUpRequestDto signUpUser) {
        SignUpCommand command = new SignUpCommand(
                signUpUser.getEmail(),
                signUpUser.getPassword(),
                signUpUser.getUserName(),
                signUpUser.getBirth());

        signUpUseCase.checkEmailDuplication(command.getEmail());
        signUpUseCase.checkUserNameDuplication(command.getUserName());
        signUpUseCase.signUp(command);

        return ResponseEntity.created(URI.create("/user"))
                .body("회원가입을 성공했습니다.");
    }
}
