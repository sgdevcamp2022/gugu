package com.example.community.util;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.Base64;
import java.util.Date;

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

    public Claims parseJwtToken(String token) {
        token = removeBearer(token);    // Bearer 제거
        return Jwts.parser()
                .setSigningKey(Base64.getEncoder().encodeToString(secretKey.getBytes()))
                .parseClaimsJws(token)
                .getBody();
    }

    private String removeBearer(String token) {
        return token.substring("Bearer".length());
    }
}
