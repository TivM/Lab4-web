package com.example.lab4.controllers;

import com.example.lab4.DataService.UserService;
import com.example.lab4.Entities.JwtByUsername;
import com.example.lab4.Entities.User;
import com.example.lab4.security_jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping("/auth")
public class RegistrationController {
    JwtUtil jwtUtil;
    @Autowired
    public void setJwtUtil(JwtUtil jwtUtil){
        this.jwtUtil = jwtUtil;
    }

    private PasswordEncoder passwordEncoder;
    @Autowired
    public void setPasswordEncoder(PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
    }

    private UserService userService;
    @Autowired
    public void setUserService(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    ResponseEntity<?> register(@Valid @RequestBody User userReq) {
        try {
            if (userService.loadUserByUsername(userReq.getUsername()) != null) {
                throw new Exception();
            }
            userService.add(new User(userReq.getUsername(), passwordEncoder.encode(userReq.getPassword())));
            return ResponseEntity.ok(userReq.getUsername());
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body("Имя пользователя '" + userReq.getUsername() + "' занято.");
        }
    }
    @PostMapping("/login")
    ResponseEntity<?> login(@Valid @RequestBody User userReq) {
        try {
            User user = (User) userService.loadUserByUsername(userReq.getUsername());
            if (user == null) {
                throw new IllegalArgumentException();
            }
            else if (!passwordEncoder.matches(userReq.getPassword(), user.getPassword())) {
                throw new IllegalAccessException();
            }
            else {
                String jwt = jwtUtil.generate(userReq.getUsername());
                return ResponseEntity.ok(new JwtByUsername(userReq.getUsername(), jwt));
            }
        }
        catch (IllegalArgumentException | IllegalAccessException e) {
            return ResponseEntity.badRequest().body("Неверное имя пользователя или пароль.");
        }
    }
}
