package com.example.community.category.adapter.out.persistence;

import com.example.community.server.adapter.out.persistence.ServerJpaEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "category")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoryJpaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String category_name;

    @Column
    private Integer is_private;

    @ManyToOne
    @JoinColumn(name = "server_id")
    private ServerJpaEntity server;
}
