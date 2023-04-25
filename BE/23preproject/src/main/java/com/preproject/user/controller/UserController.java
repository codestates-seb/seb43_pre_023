package com.preproject.user.controller;


import com.preproject.user.dto.UserPostDto;
import com.preproject.user.entity.User;
import com.preproject.user.mapper.UserMapper;
import com.preproject.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@Validated
@Slf4j
public class UserController {

    private UserService userService;
    private UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }


    /*
    회원가입
     */
    @PostMapping("/register")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){
        User user = mapper.userPostDtoToUser(userPostDto);
        User createUser = userService.createUser(user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
