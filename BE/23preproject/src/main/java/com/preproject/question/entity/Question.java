package com.preproject.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    private Long userId;

    @Column(length = 20, nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String content;

    private int views;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}
