package com.example.community.exception;

public class AlreadyExistException extends IllegalArgumentException {
    public AlreadyExistException(String message) {
        super(message);
    }
}
