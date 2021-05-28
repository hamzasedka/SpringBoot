package com.example.bankprojects.services;


import com.example.bankprojects.Model.BankAccount;
import com.example.bankprojects.repository.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankAccountServiceImp implements BankAccountService{

    @Autowired
    BankAccountRepository bankAccountRepository;
    @Override
    public BankAccount AddBankAccount(BankAccount bankAccount) {
        return this.bankAccountRepository.save(bankAccount);
    }

    @Override
    public BankAccount UpdateBankAccount(BankAccount bankAccount) {
        return this.bankAccountRepository.save(bankAccount);
    }

    @Override
    public void DeleteBankAccount(Long id) {
    this.bankAccountRepository.deleteById(id);
    }

    @Override
    public List<BankAccount> findBankAccounts() {
        return this.bankAccountRepository.findAll();
    }

    @Override
    public BankAccount findByBankAccountId(Long id) {
        return this.bankAccountRepository.findBankAccountById(id);
    }


}
