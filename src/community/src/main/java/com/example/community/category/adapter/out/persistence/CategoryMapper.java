package com.example.community.category.adapter.out.persistence;

import com.example.community.category.domain.Category;
import com.example.community.server.adapter.out.persistence.ServerJpaEntity;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {
    CategoryJpaEntity mapToJpaEntity(Category category) {
        int isPrivate = 1;
        if (!category.getIsPrivate()) {
            isPrivate = 0;
        }

        ServerJpaEntity serverJpaEntity = new ServerJpaEntity();
        serverJpaEntity.setServer_id(category.getServerId());

        return CategoryJpaEntity.builder()
                .id(category.getId())
                .category_name(category.getCategoryName())
                .is_private(isPrivate)
                .server(serverJpaEntity)
                .build();
    }
}
