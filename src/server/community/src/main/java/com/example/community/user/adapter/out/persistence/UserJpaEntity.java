package com.example.community.user.adapter.out.persistence;

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

    public UserJpaEntity(String email, String e_password, String userName, Date birth) {
        this.email = email;
        this.e_password = e_password;
        this.username = userName;
        this.birth = birth;
        this.image = "";
        this.banner_color = "";
        this.message = "";
    }
}