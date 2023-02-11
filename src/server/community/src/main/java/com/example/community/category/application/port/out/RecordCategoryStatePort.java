package com.example.community.category.application.port.out;

import com.example.community.category.domain.Category;

public interface RecordCategoryStatePort {
    void saveCategory(Category category);
}
