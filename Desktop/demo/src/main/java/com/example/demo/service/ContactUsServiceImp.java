package com.example.demo.service;

import com.example.demo.model.ContactUs;
import com.example.demo.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactUsServiceImp implements ContactUsService {
    @Autowired
    ContactUsRepository contactUsRepository;
    @Override
    public ContactUs contactUs(ContactUs contactUs) {
        return contactUsRepository.save(contactUs);
    }
}
