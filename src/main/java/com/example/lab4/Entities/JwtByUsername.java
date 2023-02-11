package com.example.lab4.Entities;

public class JwtByUsername {
    private String username;
    private String token;

    public JwtByUsername(String username, String token){
        this.token = token;
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public String getToken() {
        return token;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
