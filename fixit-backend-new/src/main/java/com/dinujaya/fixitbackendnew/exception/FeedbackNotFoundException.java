package com.dinujaya.fixitbackendnew.exception;

public class FeedbackNotFoundException extends RuntimeException{
    public FeedbackNotFoundException(Long id){
        super("Could not found the feedback with id "+id);
    }
}
