package com.example.community.category.application.port.out;

import com.example.community.category.domain.Category;

public interface LoadCategoryStatePort {
    Category loadCategory(Integer id, UpdateCategoryCommand command);

    boolean existsByCategoryId(Integer categoryId);
}
