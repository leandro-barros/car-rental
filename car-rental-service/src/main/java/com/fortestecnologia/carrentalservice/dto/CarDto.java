package com.fortestecnologia.carrentalservice.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CarDto {

    private Long id;

    private String name;

    private String model;

    private String mark;

    private String color;

    private Integer numberPort;

}
