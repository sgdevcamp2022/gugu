package com.example.community.category.adapter.out.persistence;

import com.example.community.category.application.port.out.RecordCategoryStatePort;
import com.example.community.category.domain.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;

@RequiredArgsConstructor
@Component
public class CategoryPersistenceAdapter implements RecordCategoryStatePort{
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;
    @Override
    public void saveCategory(Category category) {
        categoryRepository.save(categoryMapper.mapToJpaEntity(category));
    }
}
