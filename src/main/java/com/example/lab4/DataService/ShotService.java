package com.example.lab4.DataService;

import com.example.lab4.Entities.Shot;
import com.example.lab4.Entities.User;
import com.example.lab4.repository.ShotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ShotService {
    private ShotRepository shotRepository;
    @Autowired
    public void setShotRepository(ShotRepository shotRepository) {
        this.shotRepository = shotRepository;
    }

    public Shot addShot(Shot shot){
        return shotRepository.save(shot);
    }

    public List<Shot> getByUser(String username ){ // Вынимать из бд только точки принадлежащие определённому пользователю
        return shotRepository.findAllByOwner(username);
    }

    public List<Shot> getAll(){ //Вся таблица
        return shotRepository.findAll();
    }

}
