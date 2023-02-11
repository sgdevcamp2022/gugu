package com.example.community.server.adapter.out.persistence;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "server")
@Data
@NoArgsConstructor
public class ServerJpaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int server_id;

    @Column
    private String server_name;

    @Column
    private String image;

    public ServerJpaEntity(int id, String serverName, String image) {
        this.server_id = id;
        this.server_name = serverName;
        this.image = image;
    }
}
