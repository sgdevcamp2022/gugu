package com.example.community.user.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String userName;
    private String birth;
    private String profileImage;
    private String bannerColor;
    private String message;

    @Builder
    private User(Long id, String email, String password, String userName, String birth, String profileImage, String bannerColor, String message) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.birth = birth;
        this.profileImage = profileImage;
        this.bannerColor = bannerColor;
        this.message = message;
    }

    public static User signUpUser(String email, String password, String userName, String birth) {
        return User.builder()
                .email(email)
                .password(password)
                .userName(userName)
                .birth(birth)
                .profileImage("기본 이미지")
                .bannerColor("기본 색상")
                .message("기본 메시지")
                .build();
    }
}
