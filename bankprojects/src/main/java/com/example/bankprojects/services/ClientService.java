package com.example.bankprojects.services;

import com.example.bankprojects.Model.Client;

import java.util.Collection;

public interface ClientService {
    Client AddClient(Client client);
    Client UpdateClient(Client client);
    void DeleteClient(Long id);
    Collection<Client> findClients();
    Client findClient(Long id);

}
