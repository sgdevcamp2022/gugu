package com.example.community.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolationException;

@ControllerAdvice
@Slf4j
public class ExceptionController {

    @ExceptionHandler({IllegalArgumentException.class})
    public ResponseEntity BadInputException(IllegalArgumentException exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(exception.getMessage());
    }

    @ExceptionHandler({ConstraintViolationException.class})
    public ResponseEntity<ResultDto> constraintViolationException(ConstraintViolationException exception) {
        return ResponseEntity.badRequest()
                .body(ResultDto.builder()
                        .code(400)
                        .message(exception.getMessage().substring(12))
                        .build());
    }
}
