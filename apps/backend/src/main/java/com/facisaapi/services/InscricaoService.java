package com.facisaapi.services;

import com.facisaapi.models.Corrida;
import com.facisaapi.models.Inscricao;
import com.facisaapi.repositories.CorredorRepository;
import com.facisaapi.repositories.CorridaRepository;
import com.facisaapi.repositories.InscricaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InscricaoService {

    @Autowired
    private InscricaoRepository inscricaoRepository;

    @Autowired
    private CorredorRepository corredorRepository;

    @Autowired
    private CorridaRepository corridaRepository;

    public List<Inscricao> findAll() {
        return inscricaoRepository.findAll();
    }

    public Optional<Inscricao> findById(String id) {
        return inscricaoRepository.findById(id);
    }

    public List<Inscricao> findByCorredorId(String corredorId) {
        return inscricaoRepository.findByCorredorId(corredorId);
    }

    public List<Inscricao> findByCorridaId(String corridaId) {
        return inscricaoRepository.findByCorridaId(corridaId);
    }

    public Inscricao save(Inscricao inscricao) {
        // Validação 1: O corredor existe?
        if (!corredorRepository.existsById(inscricao.getCorredorId())) {
            throw new IllegalArgumentException("Corredor não encontrado com o ID fornecido.");
        }

        // Validação 2: A corrida existe?
        Optional<Corrida> corridaOpt = corridaRepository.findById(inscricao.getCorridaId());
        if (corridaOpt.isEmpty()) {
            throw new IllegalArgumentException("Corrida não encontrada com o ID fornecido.");
        }

        // Validação 3: A distância escolhida existe na corrida?
        Corrida corrida = corridaOpt.get();
        if (corrida.getDistancias() == null || !corrida.getDistancias().contains(inscricao.getDistanciaEscolhida())) {
            throw new IllegalArgumentException("A distância escolhida (" + inscricao.getDistanciaEscolhida() + "km) não está disponível para esta corrida. Distâncias permitidas: " + corrida.getDistancias());
        }

        // Validação 4: Status do pagamento é válido?
        List<String> statusPermitidos = List.of("PENDENTE", "PAGO", "CANCELADO");
        if (inscricao.getStatus() == null || !statusPermitidos.contains(inscricao.getStatus().toUpperCase())) {
            throw new IllegalArgumentException("Status de pagamento inválido. Valores permitidos: " + statusPermitidos);
        }
        inscricao.setStatus(inscricao.getStatus().toUpperCase()); // Padroniza tudo para maiúsculo

        return inscricaoRepository.save(inscricao);
    }

    public void deleteById(String id) {
        inscricaoRepository.deleteById(id);
    }
}
