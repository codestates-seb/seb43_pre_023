package com.preproject.question.entity;

import com.preproject.audit.Auditable;
import com.preproject.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;



@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "QUESTION")
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 20, nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String content;

    @Min(0)
    private int views;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;
}
