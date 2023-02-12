package com.example.community.user.application.service;

import com.example.community.exception.AlreadyExistException;
import com.example.community.user.application.port.in.RecordUserUseCase;
import com.example.community.user.application.port.in.SignUpCommand;
import com.example.community.user.application.port.out.LoadUserStatePort;
import com.example.community.user.application.port.out.RecordUserStatePort;
import com.example.community.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountSignUpService implements RecordUserUseCase {
    private final RecordUserStatePort recordUserStatePort;
    private final LoadUserStatePort loadUserStatePort;

    @Override
    public boolean signUp(SignUpCommand command) {
        if (loadUserStatePort.existByEmail(command.getEmail())) {
            throw new AlreadyExistException("이미 존재하는 이메일입니다.");
        } else if (loadUserStatePort.existByUsername(command.getUserName())) {
            throw new AlreadyExistException("이미 존재하는 닉네임입니다.");
        }

        User user = User.signUpUser(command.getEmail(), command.getPassword(), command.getUserName(), command.getBirth());
        recordUserStatePort.saveUser(user);
        return true;
    }
}
