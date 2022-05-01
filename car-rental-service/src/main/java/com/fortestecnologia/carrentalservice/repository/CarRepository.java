package com.fortestecnologia.carrentalservice.repository;

import com.fortestecnologia.carrentalservice.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    @Query(value = "SELECT c FROM Car c WHERE c.id > 0 AND (:model IS NULL OR c.model like %:model%)")
    List<Car> findByModel(String model);

}
