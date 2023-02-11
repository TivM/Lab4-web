package com.example.lab4.repository;

import com.example.lab4.Entities.Role;
import com.example.lab4.Entities.Shot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Integer> {
}
