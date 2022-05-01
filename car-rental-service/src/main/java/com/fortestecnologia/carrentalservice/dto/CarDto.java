package com.fortestecnologia.carrentalservice.dto;

import com.fortestecnologia.carrentalservice.model.Car;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CarDto {

    private Long id;

    private String model;

    private String mark;

    private String color;

    private Integer numberPort;

    private String plaque;

    private boolean isAirconditioning;

    public CarDto(Car car) {
        this.id = car.getId();
        this.model = car.getModel();
        this.mark = car.getMark();
        this.color = car.getColor();
        this.numberPort = car.getNumberPort();
        this.plaque = car.getPlaque();
        this.isAirconditioning = car.isAirconditioning();
    }
}
