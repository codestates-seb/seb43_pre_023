package com.preproject.question.dto;

import java.time.LocalDateTime;

public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private int views;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
//    private UserResponseDto user;

    public QuestionResponseDto(Long questionId, String title, String content, int views, LocalDateTime createdAt, LocalDateTime modifiedAt) {
        this.questionId = questionId;
        this.title = title;
        this.content = content;
        this.views = views;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}
