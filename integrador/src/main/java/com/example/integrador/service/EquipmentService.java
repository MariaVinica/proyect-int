package com.example.integrador.service;


import com.example.integrador.model.Equipment;
import com.example.integrador.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentService {

    @Autowired
    private EquipmentRepository equipmentRepository;

    public List<Equipment> findAll() {
        return equipmentRepository.findAll();
    }

    public Equipment save(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    public Optional<Equipment> updateEquipment(Long id, Equipment equipmentDetails) {
        return equipmentRepository.findById(id)
                .map(equipment -> {
                    equipment.setName(equipmentDetails.getName());
                    equipment.setDescription(equipmentDetails.getDescription());
                    equipment.setPrice(equipmentDetails.getPrice());
                    return equipmentRepository.save(equipment);
                });
    }

    public boolean deleteEquipment(Long id) {
        if (equipmentRepository.existsById(id)) {
            equipmentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Equipment> findById(Long id) {
        return equipmentRepository.findById(id);
    }
}
