package com.example.bankprojects.services;

import com.example.bankprojects.Model.BankAccount;

import java.util.List;

public interface BankAccountService {
    BankAccount AddBankAccount(BankAccount bankAccount);
    BankAccount UpdateBankAccount(BankAccount bankAccount);
    void DeleteBankAccount(Long id);
    List<BankAccount> findBankAccounts();
   BankAccount findByBankAccountId(Long id);
}
