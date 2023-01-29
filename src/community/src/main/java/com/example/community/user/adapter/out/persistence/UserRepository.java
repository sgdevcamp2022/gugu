package com.example.community.user.adapter.out.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

interface UserRepository extends JpaRepository<UserJpaEntity, Long> {
    boolean existsByEmail(String email);

    boolean existsByUsername(String username);

}