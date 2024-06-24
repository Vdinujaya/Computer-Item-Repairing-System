package com.dinujaya.fixitbackendnew.controller;

import com.dinujaya.fixitbackendnew.exception.ContactNotFoundAdvice;
import com.dinujaya.fixitbackendnew.exception.ContactNotFoundException;
import com.dinujaya.fixitbackendnew.model.Contact;
import com.dinujaya.fixitbackendnew.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/cusContact")
    Contact newContact(@RequestBody Contact newContact){return contactRepository.save(newContact);}

    @GetMapping("/cusContacts")
    List<Contact> getAllContacts() {return contactRepository.findAll();}

    @GetMapping("/cusContact/{id}")
    Contact getUserById(@PathVariable Long id){
        return contactRepository.findById(id).orElseThrow(()->new ContactNotFoundException(id));
    }

    @PutMapping("/cusContact/{id}")
    Contact updateContact(@RequestBody Contact newContact,@PathVariable Long id){
        return contactRepository.findById(id)
                .map(contact -> {
                    contact.setSubject(newContact.getSubject());
                    contact.setMessage(newContact.getMessage());
                    contact.setStatus(newContact.getStatus());
                    contact.setEmail(newContact.getEmail());
                    contact.setName(newContact.getName());
                    contact.setOther_details(newContact.getOther_details());
                    return contactRepository.save(contact);
                }).orElseThrow(()->new ContactNotFoundException(id));
    }

    @DeleteMapping("/cusContact/{id}")
    String deleteContact(@PathVariable Long id){
        if(!contactRepository.existsById(id)){
        }
        contactRepository.deleteById(id);
        return "User With id "+id+" has been deleted success.";
    }
}
