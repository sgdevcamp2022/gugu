package com.example.community.util;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ResultDto {
    private int code;
    private String message;

    public ResultDto(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
