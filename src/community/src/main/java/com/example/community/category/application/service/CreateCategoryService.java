package com.example.community.category.application.service;

import com.example.community.category.application.port.in.CreateCategoryCommand;
import com.example.community.category.application.port.in.CreateCategoryUseCase;
import com.example.community.category.application.port.out.RecordCategoryStatePort;
import com.example.community.category.domain.Category;
import com.example.community.exception.NotFoundException;
import com.example.community.server.application.port.out.LoadServerStatePort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateCategoryService implements CreateCategoryUseCase {
    private final RecordCategoryStatePort recordCategoryStatePort;
    private final LoadServerStatePort loadServerStatePort;

    @Override
    public boolean createCategory(Integer serverId, CreateCategoryCommand command) {
        if (!loadServerStatePort.existsByServerId(serverId)) {
            throw new NotFoundException("존재하지 않는 서버 id입니다.");
        }

        Category category = Category.builder()
                .categoryName(command.getCategoryName())
                .isPrivate(command.getIsPrivate())
                .serverId(serverId)
                .build();
        recordCategoryStatePort.saveCategory(category);
        return true;
    }
}
