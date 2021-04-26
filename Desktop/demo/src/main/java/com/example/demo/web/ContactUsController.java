package com.example.demo.web;

import com.example.demo.model.ContactUs;
import com.example.demo.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/ContactUs")
public class ContactUsController {
    @Autowired
    private ContactUsService contactUsService;

    @GetMapping
    public String showContactUsForm(Model model){
        ContactUs contact=new ContactUs();
        model.addAttribute("contact",contact);
        return "contactUs";
    }

    @PostMapping
    public String saveContactUs(@ModelAttribute("contactUs") ContactUs contactUs){
        this.contactUsService.contactUs(contactUs);
        return  "redirect:/ContactUs?success";
    }
}
