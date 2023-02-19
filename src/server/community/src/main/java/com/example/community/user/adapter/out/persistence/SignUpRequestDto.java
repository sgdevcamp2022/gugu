package com.example.community.user.adapter.out.persistence;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequestDto {
    private String email;
    private String password;
    private String userName;
    private String birth;
}
