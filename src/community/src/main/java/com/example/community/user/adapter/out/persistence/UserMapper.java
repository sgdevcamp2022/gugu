package com.example.community.user.adapter.out.persistence;

import com.example.community.user.domain.User;
import org.springframework.stereotype.Component;

@Component
class UserMapper {
    UserJpaEntity mapToJpaEntity(User user) {
        return new UserJpaEntity(user.getEmail(), user.getPassword(), user.getUserName(), user.getBirth());
    }
}