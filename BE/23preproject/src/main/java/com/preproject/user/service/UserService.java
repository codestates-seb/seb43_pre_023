package com.preproject.user.service;

import com.preproject.exception.BusinessLogicException;
import com.preproject.exception.ExceptionCode;
import com.preproject.user.entity.User;
import com.preproject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;






    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    /*
    유저 회원가입
     */
    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());
        User newUser = userRepository.save(user);

        return newUser;
    }


    /*
    이메일로 유저데이터 확인
     */
    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}
