package com.preproject.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;


@NoArgsConstructor
@Getter
@Setter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(length = 30, nullable = false)
    private String name;

    @Column(length = 16, nullable = false, unique = true)
    private String nickname;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 20, nullable = false)
    private String password;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
}