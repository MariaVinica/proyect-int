package com.example.integrador;

import com.example.integrador.model.Equipment;
import com.example.integrador.repository.EquipmentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class EquipmentRepositoryTest {

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Test
    void shouldSaveAndFetchEquipment() {
        Equipment equipment = new Equipment(null, "Doppler Fetal", "Frecuencia cardiaca", 300.0);
        equipment = equipmentRepository.save(equipment);
        assertThat(equipmentRepository.findById(equipment.getId()).isPresent()).isTrue();
    }

}

