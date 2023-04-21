package com.preproject.question.dto;

import lombok.Getter;

import javax.validation.constraints.*;

@Getter
public class QuestionCreateDto {
    @NotNull
    @Positive
    private Long userId;

    @NotBlank
    @Size(max = 20)
    private String title;

    @NotBlank
    private String content;

    @Min(0)
    private int views;
}
