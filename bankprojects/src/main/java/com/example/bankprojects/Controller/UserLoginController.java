package com.example.bankprojects.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserLoginController {

    @GetMapping(path = "/login")
    public String showLoginForm(){
        return "login";
    }
}
