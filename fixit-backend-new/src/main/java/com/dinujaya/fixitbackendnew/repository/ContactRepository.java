package com.dinujaya.fixitbackendnew.repository;

import com.dinujaya.fixitbackendnew.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Long> {
}
