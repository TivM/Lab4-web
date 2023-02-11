package com.example.lab4.repository;

import com.example.lab4.Entities.Shot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShotRepository extends JpaRepository<Shot,Integer> {
    List<Shot> findAllByOwner(String owner);
}
