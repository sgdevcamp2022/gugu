package com.example.community.category.application.port.in;

public interface RecordCategoryUseCase {
    boolean createCategory(Integer serverId, CreateCategoryCommand command);

    boolean updateCategory(Integer serverId, UpdateCategoryCommand command);
}