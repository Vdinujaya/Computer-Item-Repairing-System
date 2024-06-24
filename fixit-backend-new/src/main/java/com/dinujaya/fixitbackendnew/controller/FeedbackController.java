package com.dinujaya.fixitbackendnew.controller;

import com.dinujaya.fixitbackendnew.exception.FeedbackNotFoundException;
import com.dinujaya.fixitbackendnew.model.Feedback;
import com.dinujaya.fixitbackendnew.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class FeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping("/cusFeedback")
    Feedback newFeedback(@RequestBody Feedback newFeedback){return feedbackRepository.save(newFeedback);}

    @GetMapping("/cusFeedbacks")
    List<Feedback> getAllFeedbacks() {return feedbackRepository.findAll();}

    @GetMapping("/cusFeedback/{id}")
    Feedback getUserById(@PathVariable Long id){
        return feedbackRepository.findById(id).orElseThrow(()->new FeedbackNotFoundException(id));
    }

    @PutMapping("/cusFeedback/{id}")
    Feedback updateFeedback(@RequestBody Feedback newFeedback,@PathVariable Long id){
        return feedbackRepository.findById(id)
                .map(feedback -> {
                    feedback.setReply(newFeedback.getReply());
                    feedback.setFeedback(newFeedback.getFeedback());
                    feedback.setStatus(newFeedback.getStatus());
                    feedback.setEmail(newFeedback.getEmail());
                    feedback.setName(newFeedback.getName());
                    feedback.setOther_details(newFeedback.getOther_details());
                    return feedbackRepository.save(feedback);
                }).orElseThrow(()->new FeedbackNotFoundException(id));
    }

    @DeleteMapping("/cusFeedback/{id}")
    String deleteFeedback(@PathVariable Long id){
        if(!feedbackRepository.existsById(id)){
        }
        feedbackRepository.deleteById(id);
        return "Feedback With id "+id+" has been deleted success.";
    }
}
