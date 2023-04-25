package com.preproject.question.service;

import com.preproject.exception.BusinessLogicException;
import com.preproject.exception.ExceptionCode;
import com.preproject.question.entity.Question;
import com.preproject.question.mapper.QuestionMapper;
import com.preproject.question.repository.QuestionRepository;
import com.preproject.user.repository.UserRepository;
import com.preproject.user.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class QuestionService {
    private final UserRepository userRepository;
    private final QuestionMapper questionMapper;
    private final QuestionRepository  questionRepository;

    public QuestionService(UserRepository userRepository, QuestionMapper questionMapper, QuestionRepository questionRepository) {
        this.userRepository = userRepository;
        this.questionMapper = questionMapper;
        this.questionRepository = questionRepository;
    }

    @Transactional
    public Question createQuestion(Question question) {
        Long loginUserId = question.getUserId().getUserId();
        userRepository.findById(loginUserId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_USER));

        return questionRepository.save(question);
    }

    @Transactional
    public void updateQuestion(Question question){
        Long loginUserId = question.getUserId().getUserId();
        userRepository.findById(loginUserId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_USER));

        Question findQuestion = questionRepository.findById(question.getQuestionId()) // TODO: findById -> findByAllId로 바꿔야함
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOT_FOUND_QUESTION));
    }
}
