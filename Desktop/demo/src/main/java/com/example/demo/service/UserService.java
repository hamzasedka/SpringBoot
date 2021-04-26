package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.web.dto.UserRegistrationDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService{
    User save(UserRegistrationDto RegistrationDto);
    User findByUsername(String username);
}
