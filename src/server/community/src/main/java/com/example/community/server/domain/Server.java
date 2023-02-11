package com.example.community.server.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Server {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String serverName;
    private String serverImage;

    public Server(String serverName, String serverImage) {
        this.serverName = serverName;
        this.serverImage = serverImage;
    }

    public static Server withId(int id, String serverName, String serverImage) {
        return new Server(id, serverName, serverImage);
    }
}
