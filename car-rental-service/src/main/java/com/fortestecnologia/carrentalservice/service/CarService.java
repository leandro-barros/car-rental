package com.fortestecnologia.carrentalservice.service;

import com.fortestecnologia.carrentalservice.dto.CarDto;
import com.fortestecnologia.carrentalservice.model.Car;
import com.fortestecnologia.carrentalservice.repository.CarRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> list() {
        return carRepository.findAll();
    }
    public void save(CarDto carDto) {
        var car = new Car();
        BeanUtils.copyProperties(carDto, car);
        carRepository.save(car);
    }

    public void update(Long id, CarDto carDto) {
        var carSaved = carRepository.findById(id);
        BeanUtils.copyProperties(carDto, carSaved.get(), "id");
        carRepository.save(carSaved.get());
    }

    public Car findById(Long id) {
        return carRepository.findById(id).get();
    }

    public void delete(Long id) {
        carRepository.deleteById(id);
    }

}
