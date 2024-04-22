package com.example.integrador;

import com.example.integrador.controller.EquipmentController;
import com.example.integrador.model.Equipment;
import com.example.integrador.service.EquipmentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.Optional;

import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
public class EquipmentServiceTest {

    @Mock
    private EquipmentService equipmentService;

    @InjectMocks
    private EquipmentController equipmentController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(equipmentController).build();
    }

    @Test
    void getAllEquipment() throws Exception {
        Equipment equipment1 = new Equipment(1L, "Tensiómetro", "Muñeca Precisión Arterial", 100.0);
        Equipment equipment2 = new Equipment(2L, "Magneto Digital", "Magnoterapia", 200.0);
        given(equipmentService.findAll()).willReturn(Arrays.asList(equipment1, equipment2));

        mockMvc.perform(get("/integrador/equipment")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(equipment1.getName())));
    }

    @Test
    void getEquipmentById() throws Exception {
        Equipment equipment = new Equipment(1L, "Tensiómetro", "Muñeca Precisión Arterial", 100.0);
        given(equipmentService.findById(1L)).willReturn(Optional.of(equipment));

        mockMvc.perform(get("/integrador/equipment/{id}", 1L)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(equipment.getName())));
    }


}

