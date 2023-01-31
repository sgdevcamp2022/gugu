package com.gugu.gateway;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.NotAuthorizedException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@WebFilter(filterName = "AuthenticationFilter", urlPatterns = "/*")
public class JwtAuthenticationFilter implements Filter {

    private final TokenService tokenUtils;
    private final String NO_AUTHENTICATION_MESSAGE = "인증받지 못한 유저입니다.";

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        String token = resolveToken(req.getHeader("Authorization"));
        if (token != null ) {
            tokenUtils.validateToken(req, token);
            chain.doFilter(request, response);
        }
        throw new NotAuthorizedException(NO_AUTHENTICATION_MESSAGE, response);
    }

    private String resolveToken(String authorization) {
        return authorization != null ? authorization.substring(7) : null;
    }


}