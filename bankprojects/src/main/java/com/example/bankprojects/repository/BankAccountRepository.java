package com.example.bankprojects.repository;

import com.example.bankprojects.Model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount,Long> {
BankAccount findBankAccountById(Long id);
}
