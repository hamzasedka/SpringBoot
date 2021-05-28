package com.example.bankprojects.services;

import com.example.bankprojects.Model.Bank;

import java.util.List;

public interface BankService {
    Bank AddBank(Bank bank);
    Bank UpdateBank(Bank bank);
    void DeleteBank(Long id);
    List<Bank> findBanks();
    Bank findByBankId(Long id);
}
