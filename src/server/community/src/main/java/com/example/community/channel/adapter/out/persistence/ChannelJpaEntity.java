package com.example.community.channel.adapter.out.persistence;

import com.example.community.category.adapter.out.persistence.CategoryJpaEntity;
import com.example.community.server.adapter.out.persistence.ServerJpaEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "channel")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChannelJpaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String channel_name;

    @Column
    private Integer channel_type;

    @Column
    private Integer is_private;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "server_id")
    private ServerJpaEntity server;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryJpaEntity category;
}
