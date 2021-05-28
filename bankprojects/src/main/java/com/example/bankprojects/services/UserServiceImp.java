package com.example.bankprojects.services;


import com.example.bankprojects.Model.Role;
import com.example.bankprojects.Model.User;
import com.example.bankprojects.Model.UserRegistrationDto;
import com.example.bankprojects.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserServiceImp implements UserService{
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepo;

  /*  public UserServiceImp(UserRepository userRepo) {
        this.userRepo = userRepo;
    }*/

    @Override
    public User save(UserRegistrationDto RegistrationDto) {
        User user=new User(RegistrationDto.getUserName(),RegistrationDto.getFirstName()
                ,RegistrationDto.getLastName(),RegistrationDto.getEmail(),
                passwordEncoder.encode(RegistrationDto.getPassword()), Arrays.asList(new Role("ROLE_USER")));
        return this.userRepo.save(user);
    }

@Override
    public User findByUsername(String username )throws UsernameNotFoundException {
        User user=this.userRepo.findByUsername(username);
        if (user!=null){
            throw new UsernameNotFoundException("Invalid username or password");
        }
        return user;
    }
}
