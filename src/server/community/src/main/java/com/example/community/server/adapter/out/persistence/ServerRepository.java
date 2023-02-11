package com.example.community.server.adapter.out.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ServerRepository extends JpaRepository<ServerJpaEntity, Integer> {
}
