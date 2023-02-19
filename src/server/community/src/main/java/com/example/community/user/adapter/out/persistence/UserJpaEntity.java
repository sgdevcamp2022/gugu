package com.example.community.user.adapter.out.persistence;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
public class UserJpaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column
    private String email;

    @Column
    private String e_password;

    @Column
    private String username;

    @Column
    private Date birth;

    @Column
    private String image;

    @Column
    private String banner_color;

    @Column
    private String message;

    @Column
    private String refresh_token;

    @Builder
    public UserJpaEntity(int user_id, String email, String e_password, String username, Date birth, String image, String banner_color, String message, String refresh_token) {
        this.user_id = user_id;
        this.email = email;
        this.e_password = e_password;
        this.username = username;
        this.birth = birth;
        this.image = image;
        this.banner_color = banner_color;
        this.message = message;
        this.refresh_token = refresh_token;
    }
}