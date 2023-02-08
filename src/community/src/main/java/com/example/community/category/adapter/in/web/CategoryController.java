package com.example.community.category.adapter.in.web;

import com.example.community.category.adapter.out.persistence.CreateCategoryDto;
import com.example.community.category.application.port.in.CreateCategoryCommand;
import com.example.community.category.application.port.in.CreateCategoryUseCase;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class CategoryController {
    private final CreateCategoryUseCase categoryUseCase;

    @PostMapping("/{serverId}/categories")
    public ResponseEntity<ResultDto> createCategory(@PathVariable("serverId") int serverId, @RequestBody CreateCategoryDto createCategory) {
        CreateCategoryCommand command = new CreateCategoryCommand(
                createCategory.getCategoryName(),
                createCategory.getIsPrivate()
        );
        categoryUseCase.createCategory(serverId, command);
        return ResponseEntity.created(URI.create("/categories"))
                .body(ResultDto.builder()
                        .code(201)
                        .message("카테고리 생성이 완료되었습니다.")
                        .build());
    }
}