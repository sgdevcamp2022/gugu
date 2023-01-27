package com.example.community.user.adapter.in.web;

import com.example.community.user.adapter.out.persistence.SignUpRequestDto;
import com.example.community.user.application.port.in.SignUpCommand;
import com.example.community.user.application.port.in.SignUpUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

        signUpUseCase.signUp(command);

        return new ResponseEntity<>("회원가입 성공", HttpStatus.CREATED);
    }

    @RequestMapping("/")
    public String index() {
        return "Hello Spring World";
    }
}
