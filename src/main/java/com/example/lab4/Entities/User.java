package com.example.lab4.Entities;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;

@Entity
@Table(name = "users")
public class User implements UserDetails { //Модель, описывающая пользователя в базе данных
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @Size(min = 3,max = 30)
    @Column(name = "username", unique = true,nullable = false) //Валидация по длине на уровне фронта
    private String username;
    @NotNull
    @Column(name = "password",nullable = false) //Валидация по длине на уровне фронта
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;

    //--------------CONSTRUCTORS---------------
    public User(){}
    public User(String username, String password){
        this.username = username;
        this.password = password;
    }

    //--------------SETTERS---------------

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    //--------------GETTERS---------------

    public Integer getId() {
        return id;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return getRoles();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
