package com.example.community.user.adapter.out.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

interface UserRepository extends JpaRepository<UserJpaEntity, Integer> {
    boolean existsByEmail(String email);

    Optional<UserJpaEntity> findByEmail(@Param("email") String email);

    boolean existsByUsername(String username);

}