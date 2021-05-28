package com.example.bankprojects.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    @Column(unique = true)
    private String CIN;
    private String birthDay;
    private String email;
    private String phoneNumber;
    private Long client_bank;
    @OneToMany(targetEntity = BankAccount.class,cascade = CascadeType.ALL)
    @JoinColumn(name="client_account",referencedColumnName = "id")
    private List<BankAccount> bank;
}
