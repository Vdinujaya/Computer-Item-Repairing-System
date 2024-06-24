package com.dinujaya.fixitbackendnew.repository;

import com.dinujaya.fixitbackendnew.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
}
