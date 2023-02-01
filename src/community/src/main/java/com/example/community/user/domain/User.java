package com.example.community.user.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Getter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String userName;
    private Date birth;
    private String profileImage;
    private String banner_color;
    private String message;

    public User(String email, String password, String userName, Date birth) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.birth = birth;
        this.profileImage = "";
        this.banner_color = "";
        this.message = "";
    }
}
