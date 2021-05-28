package com.example.bankprojects.Controller;

import com.example.bankprojects.Model.Bank;
import com.example.bankprojects.Model.Client;
import com.example.bankprojects.services.BankService;
import com.example.bankprojects.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Collection;

@Controller
public class ClientControllerMVC {
    @Autowired
    ClientService clientService;
    @Autowired
    BankService bankService;
    @GetMapping(path = "/addclient")
    public String showBank(Model model){
         Collection<Bank> banks =this.bankService.findBanks();
        Client client=new Client();
        model.addAttribute("banks",banks);
        model.addAttribute("client",client);
        return "addclient";
    }

    @PostMapping(path = "/addClient")
    public String addBank(@ModelAttribute("client") Client client){

        this.clientService.AddClient(client);
        return  "redirect:/clients";
    }
    /////////////////////////////////////////////////Show Banks///////////////////////////////////////////////

    @GetMapping(path = "/clients/{id}")
    public String showClients(Model model,@PathVariable Long id){
    Bank bank=this.bankService.findByBankId(id);
       Collection <Client> clients =bank.getClient();
        model.addAttribute("clients",clients);
        return "showclients";
    }
    /////////////////////////////////////////////////delete Bank///////////////////////////////////////////////

    @PostMapping(path = "/deleteclient/{id}")
    public String deleteBank(@PathVariable String id){
        this.clientService.DeleteClient(Long.parseLong(id));

        return  "redirect:/clients";
    }
    /////////////////////////////////////////////////update Banks///////////////////////////////////////////////

    @GetMapping("/updateclient/{id}")
    public String updateUser(@PathVariable("id") long id, Model model) {
        model.addAttribute("banks",this.bankService.findBanks());
        model.addAttribute("client",this.clientService.findClient(id));

        return "updateclient";
    }


    @PostMapping("/updateclient")
    public String updateUser(@ModelAttribute("client") Client client) {
        this.clientService.UpdateClient(client);
        return "redirect:/banks";
    }

}


