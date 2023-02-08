package com.example.community.util;

import com.example.community.exception.NotFoundException;
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

    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity<ResultDto> notFoundException(RuntimeException runtimeException) {
        return ResponseEntity.internalServerError()
                .body(ResultDto.builder()
                        .code(404)
                        .message(runtimeException.getMessage())
                        .build());
    }
}
