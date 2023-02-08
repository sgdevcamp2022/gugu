package com.example.community.category.adapter.in.web;

import com.example.community.category.adapter.out.persistence.CreateCategoryDto;
import com.example.community.category.adapter.out.persistence.UpdateCategoryDto;
import com.example.community.category.application.port.in.CreateCategoryCommand;
import com.example.community.category.application.port.in.RecordCategoryUseCase;
import com.example.community.category.application.port.in.UpdateCategoryCommand;
import com.example.community.util.ResultDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class CategoryController {
    private final RecordCategoryUseCase recordCategoryUseCase;

    @PostMapping("/{serverId}/categories")
    public ResponseEntity<ResultDto> createCategory(@PathVariable("serverId") int serverId, @RequestBody CreateCategoryDto createCategory) {
        CreateCategoryCommand command = new CreateCategoryCommand(
                createCategory.getCategoryName(),
                createCategory.getIsPrivate()
        );
        recordCategoryUseCase.createCategory(serverId, command);
        return ResponseEntity.created(URI.create("/categories"))
                .body(ResultDto.builder()
                        .code(201)
                        .message("카테고리 생성이 완료되었습니다.")
                        .build());
    }

    @PatchMapping("/categories/{categoryId}")
    public ResponseEntity<ResultDto> updateCategory(@PathVariable("categoryId") Integer id, @RequestBody UpdateCategoryDto updateCategoryDto) {
        UpdateCategoryCommand command = new UpdateCategoryCommand(
                updateCategoryDto.getCategoryName()
        );
        recordCategoryUseCase.updateCategory(id, command);
        return ResponseEntity.ok()
                .body(ResultDto.builder()
                        .code(200)
                        .message("카테고리 수정이 완료되었습니다.")
                        .build());
    }
}