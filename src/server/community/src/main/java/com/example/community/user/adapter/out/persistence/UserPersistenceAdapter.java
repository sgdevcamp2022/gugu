package com.example.community.user.adapter.out.persistence;

import com.example.community.user.application.port.out.LoadUserStatePort;
import com.example.community.user.application.port.out.RecordUserStatePort;
import com.example.community.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class UserPersistenceAdapter implements RecordUserStatePort, LoadUserStatePort {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Override
    public void saveUser(User user) {
        userRepository.save(userMapper.mapToJpaEntity(user));
    }

    @Override
    public void updateRefreshToken(Integer userId, String refreshToken) {
        UserJpaEntity userJpaEntity = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 계정입니다."));
        userJpaEntity.setRefresh_token(refreshToken);
        userRepository.save(userJpaEntity);
    }

    @Override
    public boolean existByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public boolean existByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public SignInRequestDto loadByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다"));
    }
}