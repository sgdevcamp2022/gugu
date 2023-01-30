package com.example.community.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtTokenProvider {
    @Value("${jwt.password}")
    private String secretKey;

    public String createToken(String subject) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + Duration.ofDays(1).toMillis());

        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuedAt(now)           // 토큰 발급 시간
                .setExpiration(expiration)  // 토큰 만료시간
                .setSubject(subject)        // 토큰 제목
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
