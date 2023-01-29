package com.example.community.user.adapter.out.persistence;

import com.example.community.user.application.port.out.RecordUserStatePort;
import com.example.community.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class UserPersistenceAdapter implements RecordUserStatePort {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public void saveUser(User user) {
        userRepository.save(userMapper.mapToJpaEntity(user));
    }

    @Override
    public boolean checkEmailDuplicated(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public boolean checkUsernameDuplicated(String username) {
        return userRepository.existsByUsername(username);
    }
}