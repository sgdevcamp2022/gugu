package com.example.community.user.adapter.out.persistence;

import com.example.community.user.domain.User;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.Optional;

@Component
class UserMapper {
    UserJpaEntity mapToJpaEntity(User user) {
        Date birth = Date.valueOf(user.getBirth());

        return UserJpaEntity.builder()
                .email(user.getEmail())
                .e_password(user.getPassword())
                .username(user.getUserName())
                .birth(birth)
                .image(user.getProfileImage())
                .banner_color(user.getBannerColor())
                .message(user.getMessage())
                .build();
    }

    public LoadSignInUserDto mapToLoadUserDto(Optional<UserJpaEntity> userJpaEntity) {
        return new LoadSignInUserDto(userJpaEntity.get().getEmail(), userJpaEntity.get().getE_password());
    }
}