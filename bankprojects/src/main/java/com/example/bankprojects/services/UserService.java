package com.example.bankprojects.services;


import com.example.bankprojects.Model.User;
import com.example.bankprojects.Model.UserRegistrationDto;

public interface UserService{
    User save(UserRegistrationDto RegistrationDto);
    User findByUsername(String username);
}
