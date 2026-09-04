package com.facisaapi.services;

import com.facisaapi.dtos.CorridaDTO;
import com.facisaapi.models.Corrida;
import com.facisaapi.repositories.CorridaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CorridaService {

    private final CorridaRepository corridaRepository;

    public List<CorridaDTO> findAll() {
        return corridaRepository.findAll().stream()
                .map(CorridaDTO::fromEntity)
                .toList();
    }

    public Optional<CorridaDTO> findById(String id) {
        return corridaRepository.findById(id)
                .map(CorridaDTO::fromEntity);
    }

    public CorridaDTO create(CorridaDTO dto) {
        Corrida corrida = dto.toEntity();
        corrida.setId(null);
        Corrida salva = corridaRepository.save(corrida);
        return CorridaDTO.fromEntity(salva);
    }

    public Optional<CorridaDTO> update(String id, CorridaDTO dto) {
        return corridaRepository.findById(id).map(corridaExistente -> {
            corridaExistente.setNome(dto.nome());
            corridaExistente.setData(dto.data());
            corridaExistente.setLocal(dto.local());
            corridaExistente.setDistancias(dto.distancias());
            Corrida atualizada = corridaRepository.save(corridaExistente);
            return CorridaDTO.fromEntity(atualizada);
        });
    }

    public boolean deleteById(String id) {
        if (corridaRepository.existsById(id)) {
            corridaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
