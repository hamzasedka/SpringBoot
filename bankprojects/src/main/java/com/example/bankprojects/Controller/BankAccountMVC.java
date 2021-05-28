package com.example.bankprojects.Controller;

import com.example.bankprojects.Model.BankAccount;
import com.example.bankprojects.Model.Client;
import com.example.bankprojects.services.BankAccountService;
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
public class BankAccountMVC {
    @Autowired
    ClientService clientService;
    @Autowired
    BankAccountService bankAccount;
    @GetMapping(path = "/addbankAccount")
    public String showBank(Model model){
        Collection<Client> clients=this.clientService.findClients();
        BankAccount bankAccount=new BankAccount();
        model.addAttribute("clients",clients);
        model.addAttribute("bankAccount",bankAccount);
        return "addbankaccount";
    }

    @PostMapping(path = "/addbankaccount")
    public String addBank(@ModelAttribute("bankAccount") BankAccount bankAccount){

        this.bankAccount.AddBankAccount(bankAccount);
        return  "redirect:/banks";
    }
    /////////////////////////////////////////////////Show Banks///////////////////////////////////////////////

    @GetMapping(path = "/bankaccounts/{id}")
    public String showClients(Model model,@PathVariable Long id){
        Client client=this.clientService.findClient(id);
        Collection <BankAccount> bankAccounts =client.getBank();
        model.addAttribute("bankAccounts",bankAccounts);
        return "showbankaccount";
    }
    /////////////////////////////////////////////////delete Bank///////////////////////////////////////////////

    @PostMapping(path = "/deletebankaccount/{id}")
    public String deleteBank(@PathVariable String id){
        this.bankAccount.DeleteBankAccount(Long.parseLong(id));

        return  "redirect:/clients/"+id;
    }
    /////////////////////////////////////////////////update Banks///////////////////////////////////////////////

    @GetMapping("/updatebankaccount/{id}")
    public String updateUser(@PathVariable("id") long id, Model model) {
        model.addAttribute("clients",this.clientService.findClients());
        model.addAttribute("Account",this.bankAccount.findByBankAccountId(id));


        return "updatebankaccount";
    }


    @PostMapping("/updateBankaccount")
    public String updateUser(@ModelAttribute("bankAccount") BankAccount bankAccount) {
        this.bankAccount.UpdateBankAccount(bankAccount);
        return "redirect:/banks";
    }
}
