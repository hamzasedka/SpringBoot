package com.example.demo.web;

import com.example.demo.service.UserService;
import com.example.demo.web.dto.UserRegistrationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/registration")
public class UserRegistrationController {
    @Autowired
    private UserService userService;



    @GetMapping
    public String showRegistrationForm(Model model){
        UserRegistrationDto user=new UserRegistrationDto();
        model.addAttribute("user",user);
    return "registration";
    }

    @PostMapping
    public String RegisterUserAccount(@ModelAttribute("user") UserRegistrationDto registrationDto){
        this.userService.save(registrationDto);
        return  "redirect:/registration?success";
    }
}
