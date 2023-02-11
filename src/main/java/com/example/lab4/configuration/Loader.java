package com.example.lab4.configuration;

import com.example.lab4.Entities.Role;
import com.example.lab4.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Loader implements CommandLineRunner {
    private RoleRepository repository;

    @Autowired
    public void setRoleRepository(RoleRepository repository){
        this.repository = repository;
    }

    public Loader(RoleRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Role(1L,"ROLE_USER"));
    }
}