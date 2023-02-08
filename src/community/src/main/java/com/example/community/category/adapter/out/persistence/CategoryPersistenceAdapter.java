package com.example.community.category.adapter.out.persistence;

import com.example.community.category.application.port.in.UpdateCategoryCommand;
import com.example.community.category.application.port.out.LoadCategoryStatePort;
import com.example.community.category.application.port.out.RecordCategoryStatePort;
import com.example.community.category.domain.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
@Component
public class CategoryPersistenceAdapter implements RecordCategoryStatePort, LoadCategoryStatePort {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;
    @Override
    public void saveCategory(Category category) {
        categoryRepository.save(categoryMapper.mapToJpaEntity(category));
    }

    @Override
    public Category loadCategory(Integer id, UpdateCategoryCommand command) {
        CategoryJpaEntity category = categoryRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("존재하지 않는 카테고리 id입니다."));
        category.setCategory_name(command.getCategoryName());
        return categoryMapper.mapToDomainEntity(category);
    }
}
