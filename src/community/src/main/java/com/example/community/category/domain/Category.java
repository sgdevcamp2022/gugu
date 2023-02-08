package com.example.community.category.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String categoryName;
    private Boolean isPrivate;
    private Integer serverId;

    public static Category withId(Integer id, String categoryName, Boolean isPrivate, Integer serverId) {
        return Category.builder()
                .id(id)
                .categoryName(categoryName)
                .isPrivate(isPrivate)
                .serverId(serverId)
                .build();
    }
}
