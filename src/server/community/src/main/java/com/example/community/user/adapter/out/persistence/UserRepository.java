package com.example.community.user.adapter.out.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

interface UserRepository extends JpaRepository<UserJpaEntity, Long> {
    boolean existsByEmail(String email);

    @Query(value = "select new com.example.community.user.adapter.out.persistence.SignInRequestDto(u.email, u.e_password) from UserJpaEntity u where u.email = :email")
    Optional<SignInRequestDto>findByEmail(@Param("email") String email);

    boolean existsByUsername(String username);

}