package com.example.demo.service;

import com.example.demo.config.CustomDetailService;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.web.dto.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
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
