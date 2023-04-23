package com.preproject.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class QuestionResponseListDto {
    List<QuestionResponseDto> responsesDto;
}
