package com.example.lab4.controllers;

import com.example.lab4.DataService.ShotService;
import com.example.lab4.Entities.Shot;
import com.example.lab4.Entities.User;
import com.example.lab4.repository.ShotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController //Добаляет @ResponseBody -> ответ высылается в виде json внутри http response
@RequestMapping("/api/shots")
public class ShotController {
    private ShotService shotService;
    @Autowired
    public void setShotService(ShotService shotService){
        this.shotService = shotService;
    }

    @GetMapping("/user") // .../api/shots/user -> Запрос всех точек определённого пользователя - Через Principal можно будет получать только свои иначе можно добавть новый get сетод на новый url
    ResponseEntity<?> getUserShots(@RequestBody String username){ //Testing ((@Valid @RequestBody Principal principal))
        return ResponseEntity.ok(shotService.getByUser(username));
    }

    @GetMapping("/my") // .../api/shots/my
    ResponseEntity<?> getMyShots(Principal principal){
        return ResponseEntity.ok(shotService.getByUser(principal.getName()));
    }
    @GetMapping("/all") // .../api/shots/all
    ResponseEntity<?> getALLShots(){
        return ResponseEntity.ok(shotService.getAll());
    }

    @PostMapping("/add")// .../api/shots -> Добавление точки пользователя, возвращает добавленный объект
    ResponseEntity<?> addUserShots(@Valid @RequestBody Shot shot) { //Testing ((@Valid @RequestBody Shot shot, Principal principal))
        return ResponseEntity.ok(shotService.addShot(shot));
    }

}
