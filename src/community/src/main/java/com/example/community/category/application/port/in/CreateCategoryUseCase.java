package com.example.community.category.application.port.in;

public interface CreateCategoryUseCase {
    boolean createCategory(Integer serverId, CreateCategoryCommand command);
}