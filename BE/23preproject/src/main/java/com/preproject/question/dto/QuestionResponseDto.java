package com.preproject.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private int views;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
//    private UserResponseDto user;
}
