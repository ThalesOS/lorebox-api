package com.facisaapi.services;

import com.facisaapi.dtos.CorredorDTO;
import com.facisaapi.models.Corredor;
import com.facisaapi.repositories.CorredorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CorredorService {

    private final CorredorRepository corredorRepository;

    public List<CorredorDTO> findAll() {
        return corredorRepository.findAll().stream()
                .map(CorredorDTO::fromEntity)
                .toList();
    }

    public Optional<CorredorDTO> findById(String id) {
        return corredorRepository.findById(id)
                .map(CorredorDTO::fromEntity);
    }

    public CorredorDTO create(CorredorDTO dto) {
        Corredor corredor = dto.toEntity();
        corredor.setId(null);
        Corredor salvo = corredorRepository.save(corredor);
        return CorredorDTO.fromEntity(salvo);
    }

    public Optional<CorredorDTO> update(String id, CorredorDTO dto) {
        return corredorRepository.findById(id).map(corredorExistente -> {
            corredorExistente.setNome(dto.nome());
            corredorExistente.setCpf(dto.cpf());
            corredorExistente.setDataNascimento(dto.dataNascimento());
            corredorExistente.setGenero(dto.genero());
            Corredor atualizado = corredorRepository.save(corredorExistente);
            return CorredorDTO.fromEntity(atualizado);
        });
    }

    public boolean deleteById(String id) {
        if (corredorRepository.existsById(id)) {
            corredorRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
