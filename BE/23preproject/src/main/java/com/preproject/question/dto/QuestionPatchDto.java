package com.preproject.question.dto;

import lombok.Getter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPatchDto {
    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @Min(0)
    private int views;
}
