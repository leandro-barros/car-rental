package com.fortestecnologia.carrentalservice.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class Car {

    @Id
    @GeneratedValue(generator = "sq_car")
    @SequenceGenerator(name = "sq_car", sequenceName = "sq_car", allocationSize = 1)
    private Long id;

    @NotNull
    private String name;

    private String model;

    private String mark;

    private String color;

    @Column(name = "number_port")
    private Integer numberPort;
}
