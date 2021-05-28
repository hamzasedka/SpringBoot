package com.example.bankprojects.Controller;

import com.example.bankprojects.Model.Bank;
import com.example.bankprojects.services.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Collection;

@Controller
public class BankControllerMVC {
    @Autowired
    BankService bankService;
    /////////////////////////////////////////////////Add Bank///////////////////////////////////////////////
    @GetMapping(path = "/addbank")
    public String showBank(Model model){
        Bank bank=new Bank();
        model.addAttribute("bank",bank);
        return "addBank";
    }

    @PostMapping(path = "/addbank")
    public String addBank(@ModelAttribute("bank") Bank bank){
        this.bankService.AddBank(bank);
        return  "redirect:/bank?success";
    }
    /////////////////////////////////////////////////Show Banks///////////////////////////////////////////////

    @GetMapping(path = "/banks")
    public String showBanks(Model model){
        Collection<Bank> banks=this.bankService.findBanks();
        model.addAttribute("banks",banks);
        return "showBanks";
    }
    /////////////////////////////////////////////////delete Bank///////////////////////////////////////////////

    @PostMapping(path = "/deleteBank/{id}")
    public String deleteBank(@PathVariable String id){
        this.bankService.DeleteBank(Long.parseLong(id));

        return  "redirect:/banks";
    }
    /////////////////////////////////////////////////update Banks///////////////////////////////////////////////

    @GetMapping("/updateBank/{id}")
    public String updateUser(@PathVariable("id") long id, Model model) {
     model.addAttribute("bank",this.bankService.findByBankId(id));
     System.out.println( model.addAttribute("bank",this.bankService.findByBankId(id)));
        return "updatebank";
    }


    @PostMapping("/updateBank")
    public String updateUser(@ModelAttribute("bank") Bank bank) {
       this.bankService.UpdateBank(bank);
        return "redirect:/banks";
    }
}
