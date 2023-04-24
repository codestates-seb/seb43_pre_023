package com.preproject.user.entity;

import com.preproject.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(length = 30, nullable = true)
    private String userName;

    @Column(length = 16, nullable = false, unique = true)
    private String displayName;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 20, nullable = false)
    private String password;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    public User(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    @OneToMany(mappedBy = "userId")
    private List<Question> questions = new ArrayList<>();
}
