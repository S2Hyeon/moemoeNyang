package com.ssafy.moemoe.exception;

import com.ssafy.moemoe.common.model.BaseResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;

@RestControllerAdvice
@RequiredArgsConstructor
public class ExceptionAdvice {
    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    protected ResponseEntity<? extends BaseResponseBody> applicantDuplicationException(IllegalArgumentException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(BaseResponseBody.of(404, e.getMessage()+" 재확인바랍니다!"));
    }
}
