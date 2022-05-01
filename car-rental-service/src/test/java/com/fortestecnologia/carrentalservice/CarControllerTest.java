package com.fortestecnologia.carrentalservice;

import com.fortestecnologia.carrentalservice.dto.CarDto;
import com.fortestecnologia.carrentalservice.service.CarService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class CarControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CarService carService;

    @Test
    public void shouldReturnStatusOk_WhenGetRequestFindAllCars() throws Exception {

        List<CarDto> carDtos = Arrays.asList(createCar());

        Mockito.when(carService.list(Mockito.any())).thenReturn(carDtos);

        mockMvc.perform(MockMvcRequestBuilders.get("/cars").param("model", ""))
                .andExpect(jsonPath("$.*", Matchers.hasSize(1)))
                .andExpect(jsonPath("$.[0].mark").value("Fiat"))
                .andExpect(jsonPath("$.*.model", Matchers.hasItems("Palio")))
                .andExpect(jsonPath("$.*.color", Matchers.hasItem("Preta")))
                .andExpect(jsonPath("$.[0].*", Matchers.hasSize(7)))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    private CarDto createCar() {
        CarDto carDto = CarDto.builder()
                            .color("Preta")
                            .mark("Fiat")
                            .model("Palio")
                            .isAirconditioning(true)
                            .plaque("HEX5699")
                            .numberPort(4)
                        .build();

        return carDto;
    }
}
