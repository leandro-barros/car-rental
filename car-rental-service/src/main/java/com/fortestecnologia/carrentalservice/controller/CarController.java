package com.fortestecnologia.carrentalservice.controller;

import com.fortestecnologia.carrentalservice.dto.CarDto;
import com.fortestecnologia.carrentalservice.model.Car;
import com.fortestecnologia.carrentalservice.service.CarService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/cars")
@RestController
public class CarController {

    private CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List<Car> list() {
        return carService.list();
    }

    @PostMapping
    public void save(@RequestBody CarDto carDto) {
        carService.save(carDto);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody CarDto carDto) {
        carService.update(id, carDto);
    }

    @GetMapping("/{id}")
    public Car findById(@PathVariable Long id) {
        return carService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        carService.delete(id);
    }

}
