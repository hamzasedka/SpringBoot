package com.example.bankprojects.Controller;


import com.example.bankprojects.Model.UserRegistrationDto;
import com.example.bankprojects.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserRegistrationController {
    @Autowired
    private UserService userService;



    @GetMapping(path = "registration")
    public String showRegistrationForm(Model model){
        UserRegistrationDto user=new UserRegistrationDto();
        model.addAttribute("user",user);
    return "registration";
    }

    @PostMapping(path = "registration")
    public String RegisterUserAccount(@ModelAttribute("user") UserRegistrationDto registrationDto){
        this.userService.save(registrationDto);
        return  "redirect:/registration?success";
    }
}
