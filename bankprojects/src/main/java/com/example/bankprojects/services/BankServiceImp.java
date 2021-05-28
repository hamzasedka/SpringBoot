package com.example.bankprojects.services;

import com.example.bankprojects.Model.Bank;
import com.example.bankprojects.repository.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankServiceImp implements BankService{
    @Autowired
    BankRepository bankRepository;
    @Override
    public Bank AddBank(Bank bank) {
        return this.bankRepository.save(bank);
    }

    @Override
    public Bank UpdateBank(Bank bank) {
        return this.bankRepository.save(bank);
    }

    @Override
    public void DeleteBank(Long id) {
        this.bankRepository.deleteById(id);
    }

    @Override
    public List<Bank> findBanks() {
        return this.bankRepository.findAll();
    }




    @Override
    public Bank findByBankId(Long id) {
        return this.bankRepository.findBankById(id);
    }




}
