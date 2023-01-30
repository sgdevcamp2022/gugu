package com.gugu.media.utils;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Optional;
@Slf4j
@Component
public class Parser {

    public Optional<Long> parseId(String sid) {
        Long id = null;
        try {
            id = Long.valueOf(sid);
        } catch (Exception e) {
            log.debug("An error occured: {}", e.getMessage());
        }

        return Optional.ofNullable(id);
    }
}
