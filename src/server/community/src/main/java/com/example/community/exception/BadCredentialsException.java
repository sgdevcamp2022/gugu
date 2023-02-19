package com.example.community.exception;

public class BadCredentialsException extends IllegalArgumentException{
    public BadCredentialsException(String message) {
        super(message);
    }
}
