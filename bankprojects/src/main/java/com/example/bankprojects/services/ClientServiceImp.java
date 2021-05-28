package com.example.bankprojects.services;

import com.example.bankprojects.Model.Client;
import com.example.bankprojects.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ClientServiceImp implements ClientService{
    @Autowired
    ClientRepository clientRepository;
    @Override
    public Client AddClient(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public Client UpdateClient(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public void DeleteClient(Long id) {
     this.clientRepository.deleteById(id);
    }

    @Override
    public Collection<Client> findClients() {
        return this.clientRepository.findAll();
    }

    @Override
    public Client findClient(Long id) {
        return this.clientRepository.findClientById(id);
    }


}
