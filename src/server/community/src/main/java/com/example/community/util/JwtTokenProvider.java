package com.example.community.util;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.json.BasicJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.Base64;
import java.util.Date;
import java.util.Map;

@Component
public class JwtTokenProvider {
    @Value("${jwt.password}")
    private String secretKey;

    public String createAuthToken(Integer userId) {
        return create(userId, "authToken", 1);       // 4시간
    }

    public String createRefreshToken(Integer userId) {
        return create(userId,"refreshToken", 84);    // 14시간
    }

    private String create(Integer userId, String subject, Integer hours) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + hours * Duration.ofHours(4).toMillis());  // 하루 기준
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setSubject(subject)
                .claim("userId", userId)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, Base64.getEncoder().encodeToString(secretKey.getBytes()))   // 알고리즘, secret key 세팅
                .compact();
    }

    public Integer parseJwtToken(String token) {
        String payloadJWT = token.split("\\.")[1];
        Base64.Decoder decoder = Base64.getUrlDecoder();

        final String payload = new String(decoder.decode(payloadJWT));
        JsonParser jsonParser = new BasicJsonParser();
        Map<String, Object> jsonArray = jsonParser.parseMap(payload);
        Integer userId = Integer.valueOf(jsonArray.get("userId").toString());

        return userId;
    }

    private String removeBearer(String token) {
        return token.substring("Bearer".length());
    }
}
