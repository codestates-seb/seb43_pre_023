package com.preproject.question.mapper;


import com.preproject.question.dto.QuestionCreateDto;
import com.preproject.question.dto.QuestionResponseDto;
import com.preproject.question.dto.QuestionResponseListDto;
import com.preproject.question.dto.QuestionUpdateDto;
import com.preproject.question.entity.Question;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class QuestionMapper {
    public Question questionCreateDtoToQuestion(QuestionCreateDto questionCreateDto){
        Question question = new Question();
        question.setTitle(questionCreateDto.getTitle());
        question.setContent(questionCreateDto.getContent());
        question.setViews(questionCreateDto.getViews());
        question.setUserId(questionCreateDto.getUserId());

        return question;
    }

    public Question questionUpdateDtoToQuestion(Long id, QuestionUpdateDto questionUpdateDto){
        Question question = new Question();
        question.setQuestionId(id);
        question.setTitle(questionUpdateDto.getTitle());
        question.setContent(questionUpdateDto.getContent());
        question.setViews(questionUpdateDto.getViews());

        return question;
    }

    public QuestionResponseDto questionToQuestionResponseDto(Question question){
        QuestionResponseDto responseDto = new QuestionResponseDto(
                question.getQuestionId(),
                question.getTitle(),
                question.getContent(),
                question.getViews(),
                question.getCreatedAt(),
                question.getModifiedAt()
        );

        return responseDto;
    }

    public QuestionResponseListDto questionListToResponsesDto(List<Question> questionList){
        List<QuestionResponseDto> responseDtoList = new ArrayList<>();

        for (int i=0; i<questionList.size(); i++){
            Question question = questionList.get(i);
            QuestionResponseDto responseDto = new QuestionResponseDto(
                    question.getQuestionId(),
                    question.getTitle(),
                    question.getContent(),
                    question.getViews(),
                    question.getCreatedAt(),
                    question.getModifiedAt()
            );
            responseDtoList.add(responseDto);
        }
        QuestionResponseListDto responsesDto = new QuestionResponseListDto(responseDtoList);
        return responsesDto;
    }
}
