package com.preproject.user.mapper;


import com.preproject.user.dto.UserPostDto;
import com.preproject.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    default User userPostDtoToUser(UserPostDto userPostDto) {
        User user = new User();

        user.setEmail(userPostDto.getEmail());
        user.setDisplayName(userPostDto.getDisplayName());
        user.setPassword(userPostDto.getPassword());

        return user;
    }
}
