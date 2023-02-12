package com.example.community.category.application.port.in;

import com.example.community.common.SelfValidating;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
public class CreateCategoryCommand extends SelfValidating<CreateCategoryCommand> {
    @NotNull
    @Size(max = 15, message = "카테고리 이름은 15글자 이하여야 합니다.")
    private final String categoryName;

    @NotNull
    private final Boolean isPrivate;

    public CreateCategoryCommand(String categoryName, Boolean isPrivate) {
        this.categoryName = categoryName;
        this.isPrivate = isPrivate;
        this.validateSelf();
    }
}
