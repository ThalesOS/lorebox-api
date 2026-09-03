package com.facisaapi.services;

import com.facisaapi.models.Corredor;
import com.facisaapi.repositories.CorredorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CorredorService {

    @Autowired
    private CorredorRepository corredorRepository;

    public List<Corredor> findAll() {
        return corredorRepository.findAll();
    }

    public Optional<Corredor> findById(String id) {
        return corredorRepository.findById(id);
    }

    public Corredor save(Corredor corredor) {
        return corredorRepository.save(corredor);
    }

    public void deleteById(String id) {
        corredorRepository.deleteById(id);
    }
}
