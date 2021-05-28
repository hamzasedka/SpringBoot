package com.example.bankprojects.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bank")

public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String name;
    @Column(unique = true)
    private String code;
    private String adresse;
    private int companeisNumber;
    @OneToMany(targetEntity = Client.class,cascade = CascadeType.ALL)
    @JoinColumn(name="client_bank",referencedColumnName = "id")
    private Collection<Client> client;

}
