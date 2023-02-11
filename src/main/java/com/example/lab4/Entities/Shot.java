package com.example.lab4.Entities;


import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "shots")
public class Shot { //Модель, представляющая одно конкретное попадание
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @Size(min = 3,max = 30)
    @Column(name = "owner",nullable = false)
    private String owner;
    @NotNull
    @Column(name = "x",nullable = false) //Graph -> Валидация на целостность не нужна
    private Double x;
    @NotNull
    @Min(-5)
    @Max(5)
    @Column(name = "y",nullable = false)
    private Double y;
    @NotNull
    @Column(name = "r",nullable = false) //Graph -> Валидация на целостность не нужна
    private Integer r;
    @NotNull
    @Column(name = "status",nullable = false)
    private Boolean status;

    //-------------------CONSTRUCTORS----------------------
    public Shot(){}
    public Shot(String owner, Double x, Double y,Integer r, Boolean status){ //Либо добавить валидацию либо получать status с фронта
        this.owner = owner;
        this.x = x;
        this.y = y;
        this.r = r;
        this.status = status;
    }


    //-------------------SETTERS----------------------

    public void setId(Integer id) {
        this.id = id;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public void setR(Integer r) {
        this.r = r;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    //-------------------GETTERS----------------------


    public Integer getId() {
        return this.id;
    }

    public String getOwner() {
        return owner;
    }

    public Double getX() {
        return x;
    }

    public Double getY() {
        return y;
    }

    public Integer getR() {
        return r;
    }

    public Boolean getStatus() {
        return status;
    }
}
