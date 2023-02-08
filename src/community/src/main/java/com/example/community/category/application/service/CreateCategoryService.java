package com.example.community.category.application.service;

import com.example.community.category.application.port.in.CreateCategoryCommand;
import com.example.community.category.application.port.in.CreateCategoryUseCase;
import com.example.community.category.application.port.out.RecordCategoryStatePort;
import com.example.community.category.domain.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateCategoryService implements CreateCategoryUseCase {
    private final RecordCategoryStatePort recordCategoryStatePort;

    @Override
    public boolean createCategory(Integer serverId, CreateCategoryCommand command) {
        // TODO: 유효한 serverId인지 검증

        Category category = Category.builder()
                .categoryName(command.getCategoryName())
                .isPrivate(command.getIsPrivate())
                .serverId(serverId)
                .build();
        recordCategoryStatePort.saveCategory(category);
        return true;
    }
}
