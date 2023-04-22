package com.preproject.question.mapper;

import com.preproject.question.dto.QuestionCreateDto;
import com.preproject.question.dto.QuestionResponseDto;
import com.preproject.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    QuestionMapper INSTANCE = Mappers.getMapper(QuestionMapper.class);

    @Mapping(source = "userId", target = "userId.userId")
    Question mapToEntity(QuestionCreateDto questionCreateDto);

    QuestionResponseDto mapToDto(Question question);

}
