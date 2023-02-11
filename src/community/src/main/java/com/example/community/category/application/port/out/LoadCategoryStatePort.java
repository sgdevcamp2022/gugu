package com.example.community.category.application.port.out;

import com.example.community.category.domain.Category;

public interface LoadCategoryStatePort {
    Category loadCategory(Integer categoryId);

    boolean existsByCategoryId(Integer categoryId);
}
