package com.example.community.user.application.service;

import com.example.community.user.application.port.in.SignUpCommand;
import com.example.community.user.application.port.in.SignUpUseCase;
import com.example.community.user.application.port.out.RecordUserStatePort;
import com.example.community.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountSignUpService implements SignUpUseCase {
    private final RecordUserStatePort recordUserStatePort;
    // TODO: 비밀번호 암호화

    @Override
    public boolean signUp(SignUpCommand command) {
        // TODO: 비즈니스 규칙 검증(중복된 이메일 확인, 중복된 사용자 이름 확인)
        // requireEmailIsDuplicated(command.getEmail());
        // requireUserNameIsDuplicated(command.getUserName());
        // TODO: 모델 상태 조작
        // TODO: 출력 값 반환
        User user = new User(command.getEmail(), command.getPassword(), command.getUserName(), command.getBirth());
        recordUserStatePort.saveUser(user);
        return true;
    }
}
