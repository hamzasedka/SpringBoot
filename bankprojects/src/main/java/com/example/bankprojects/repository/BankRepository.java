package com.example.bankprojects.repository;


import com.example.bankprojects.Model.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepository extends JpaRepository<Bank,Long> {
    Bank findBankById(Long id);
}
