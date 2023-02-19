package com.example.community.user.adapter.out.persistence;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class UserResponseDto {
    private int code;
    private String message;
    private String info;
}
