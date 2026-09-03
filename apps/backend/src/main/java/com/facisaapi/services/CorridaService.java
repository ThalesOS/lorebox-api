package com.facisaapi.services;

import com.facisaapi.models.Corrida;
import com.facisaapi.repositories.CorridaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CorridaService {

    @Autowired
    private CorridaRepository corridaRepository;

    public List<Corrida> findAll() {
        return corridaRepository.findAll();
    }

    public Optional<Corrida> findById(String id) {
        return corridaRepository.findById(id);
    }

    public Corrida save(Corrida corrida) {
        return corridaRepository.save(corrida);
    }

    public void deleteById(String id) {
        corridaRepository.deleteById(id);
    }
}
