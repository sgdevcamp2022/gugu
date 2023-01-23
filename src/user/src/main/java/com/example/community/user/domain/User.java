package com.example.community.user.domain;

import lombok.Getter;

@Getter
public class User {
    private Long id;
    private String email;
    private String password;
    private String userName;
    private String birth;
    private String profileImage;
    private String banner_color;
    private String message;

    public User(Long id, String email, String password, String userName, String birth, String profileImage, String banner_color, String message) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.birth = birth;
        this.profileImage = profileImage;
        this.banner_color = banner_color;
        this.message = message;
    }
}
