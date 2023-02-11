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
    public void updateCategory(Integer categoryId, UpdateCategoryCommand command) {
        CategoryJpaEntity categoryJpaEntity = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 카테고리 id입니다."));
        categoryJpaEntity.setCategory_name(command.getCategoryName());
        categoryRepository.save(categoryJpaEntity);
    }

    @Override
    public Category loadCategory(Integer categoryId) {
        CategoryJpaEntity categoryJpaEntity = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 카테고리 id입니다."));
        return categoryMapper.mapToDomainEntity(categoryJpaEntity);
    }

    @Override
    public boolean existsByCategoryId(Integer categoryId) {
        if (!categoryRepository.existsById(categoryId)) {
            throw new EntityNotFoundException("존재하지 않는 카테고리 id입니다.");
        }
        return true;
    }
}
