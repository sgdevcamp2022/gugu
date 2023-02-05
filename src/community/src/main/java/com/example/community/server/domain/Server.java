package com.example.community.server.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
public class Server {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String serverName;
    private String serverImage;

    public Server(String serverName) {
        this.serverName = serverName;
        this.serverImage = "";
    }
}
