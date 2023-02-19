package com.example.community.exception;

public class TokenValidationException extends IllegalArgumentException {
    // TODO: 상속 수정
    public TokenValidationException(String message) {
        super(message);
    }
}