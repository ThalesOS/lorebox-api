package com.facisaapi.services;

import com.facisaapi.dtos.InscricaoDTO;
import com.facisaapi.enums.StatusInscricao;
import com.facisaapi.models.Corrida;
import com.facisaapi.models.Inscricao;
import com.facisaapi.repositories.CorredorRepository;
import com.facisaapi.repositories.CorridaRepository;
import com.facisaapi.repositories.InscricaoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InscricaoService {

    private final InscricaoRepository inscricaoRepository;
    private final CorredorRepository corredorRepository;
    private final CorridaRepository corridaRepository;

    public List<InscricaoDTO> findAll() {
        return inscricaoRepository.findAll().stream()
                .map(InscricaoDTO::fromEntity)
                .toList();
    }

    public Optional<InscricaoDTO> findById(String id) {
        return inscricaoRepository.findById(id)
                .map(InscricaoDTO::fromEntity);
    }

    public List<InscricaoDTO> findByCorredorId(String corredorId) {
        return inscricaoRepository.findByCorredorId(corredorId).stream()
                .map(InscricaoDTO::fromEntity)
                .toList();
    }

    public List<InscricaoDTO> findByCorridaId(String corridaId) {
        return inscricaoRepository.findByCorridaId(corridaId).stream()
                .map(InscricaoDTO::fromEntity)
                .toList();
    }

    public InscricaoDTO create(InscricaoDTO dto) {
        validarInscricao(dto);

        Inscricao inscricao = dto.toEntity();
        inscricao.setId(null);

        Inscricao salva = inscricaoRepository.save(inscricao);
        return InscricaoDTO.fromEntity(salva);
    }

    public Optional<InscricaoDTO> update(String id, InscricaoDTO dto) {
        if (!inscricaoRepository.existsById(id)) {
            return Optional.empty();
        }

        validarInscricao(dto);

        return inscricaoRepository.findById(id).map(inscricaoExistente -> {
            inscricaoExistente.setCorredorId(dto.corredorId());
            inscricaoExistente.setCorridaId(dto.corridaId());
            inscricaoExistente.setDistanciaEscolhida(dto.distanciaEscolhida());
            if (dto.status() != null) {
                inscricaoExistente.setStatus(dto.status());
            }
            Inscricao atualizada = inscricaoRepository.save(inscricaoExistente);
            return InscricaoDTO.fromEntity(atualizada);
        });
    }

    public boolean deleteById(String id) {
        if (inscricaoRepository.existsById(id)) {
            inscricaoRepository.deleteById(id);
            return true;
        }
        return false;
    }

    private void validarInscricao(InscricaoDTO dto) {
        if (!corredorRepository.existsById(dto.corredorId())) {
            throw new IllegalArgumentException("Corredor não encontrado com o ID: " + dto.corredorId());
        }

        Corrida corrida = corridaRepository.findById(dto.corridaId())
                .orElseThrow(() -> new IllegalArgumentException("Corrida não encontrada com o ID: " + dto.corridaId()));

        if (corrida.getDistancias() == null || !corrida.getDistancias().contains(dto.distanciaEscolhida())) {
            throw new IllegalArgumentException("A distância de " + dto.distanciaEscolhida()
                    + " km não está disponível nesta corrida. Opções válidas: " + corrida.getDistancias());
        }
    }
}
