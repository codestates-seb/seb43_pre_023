package com.preproject.question.dto;

import com.preproject.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.*;

@Getter
@AllArgsConstructor
public class QuestionCreateDto {
    @NotNull
    @Positive
    private User userId;

    @NotBlank
    @Size(max = 20)
    private String title;

    @NotBlank
    private String content;

    @Min(0)
    private int views;
}
