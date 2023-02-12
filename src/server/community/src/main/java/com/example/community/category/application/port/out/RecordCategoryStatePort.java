package com.example.community.category.application.port.out;

import com.example.community.category.application.port.in.CreateCategoryCommand;
import com.example.community.category.application.port.in.UpdateCategoryCommand;

public interface RecordCategoryStatePort {
    void saveCategory(Integer serverId, CreateCategoryCommand command);

    void updateCategory(Integer categoryId, UpdateCategoryCommand command);
}
