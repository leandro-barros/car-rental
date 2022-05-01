package com.fortestecnologia.carrentalservice.controller;

import com.fortestecnologia.carrentalservice.dto.CarDto;
import com.fortestecnologia.carrentalservice.model.Car;
import com.fortestecnologia.carrentalservice.service.CarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/cars")
@RestController
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List<CarDto> list(@RequestParam String model) {
        return carService.list(model);
    }

    @PostMapping
    public ResponseEntity<Car> save(@RequestBody CarDto carDto) {
        carService.save(carDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody CarDto carDto) {
        carService.update(id, carDto);
    }

    @GetMapping("/{id}")
    public Car findById(@PathVariable Long id) {
        return carService.findById(id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        carService.delete(id);
    }

}
