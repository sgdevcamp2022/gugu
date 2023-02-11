package com.example.community.category.application.service;

import com.example.community.category.application.port.in.CreateCategoryCommand;
import com.example.community.category.application.port.in.RecordCategoryUseCase;
import com.example.community.category.application.port.in.UpdateCategoryCommand;
import com.example.community.category.application.port.out.LoadCategoryStatePort;
import com.example.community.category.application.port.out.RecordCategoryStatePort;
import com.example.community.category.domain.Category;
import com.example.community.server.application.port.out.LoadServerStatePort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecordCategoryService implements RecordCategoryUseCase {
    private final RecordCategoryStatePort recordCategoryStatePort;
    private final LoadCategoryStatePort loadCategoryStatePort;
    private final LoadServerStatePort loadServerStatePort;

    @Override
    public boolean createCategory(Integer serverId, CreateCategoryCommand command) {
        loadServerStatePort.existsByServerId(serverId);

        Category category = Category.builder()
                .categoryName(command.getCategoryName())
                .isPrivate(command.getIsPrivate())
                .serverId(serverId)
                .build();
        recordCategoryStatePort.saveCategory(category);
        return true;
    }

    @Override
    public boolean updateCategory(Integer serverId, UpdateCategoryCommand command) {
        Category category = loadCategoryStatePort.loadCategory(serverId, command);
        recordCategoryStatePort.saveCategory(category);
        return true;
    }

}
