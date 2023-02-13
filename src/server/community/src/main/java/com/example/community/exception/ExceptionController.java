package com.example.community.exception;

import com.example.community.util.ResultDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.persistence.EntityNotFoundException;
import javax.validation.ConstraintViolationException;
import java.util.NoSuchElementException;

@ControllerAdvice
@Slf4j
public class ExceptionController {

    @ExceptionHandler({AlreadyExistException.class})
    public ResponseEntity<ResultDto> alreadyExistException(AlreadyExistException exception) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(ResultDto.builder()
                        .code(409)
                        .message(exception.getMessage())
                        .build());
    }

    @ExceptionHandler({ConstraintViolationException.class})
    public ResponseEntity<ResultDto> constraintViolationException(ConstraintViolationException exception) {
        return ResponseEntity.badRequest()
                .body(ResultDto.builder()
                        .code(400)
                        .message(exception.getMessage())
                        .build());
    }

    @ExceptionHandler({EntityNotFoundException.class, NoSuchElementException.class})
    public ResponseEntity<ResultDto> notFoundException(Exception exception) {
        return ResponseEntity.internalServerError()
                .body(ResultDto.builder()
                        .code(404)
                        .message(exception.getMessage())
                        .build());
    }

    @ExceptionHandler({BadCredentialsException.class})
    public ResponseEntity<ResultDto> badCredentialsException(BadCredentialsException exception) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ResultDto.builder()
                        .code(401)
                        .message(exception.getMessage())
                        .build());
    }
}
