package com.facisaapi.controllers;

import com.facisaapi.dtos.InscricaoDTO;
import com.facisaapi.services.InscricaoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inscricoes")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class InscricaoController {

    private final InscricaoService inscricaoService;

    @GetMapping
    public ResponseEntity<List<InscricaoDTO>> getAll() {
        return ResponseEntity.ok(inscricaoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<InscricaoDTO> getById(@PathVariable String id) {
        return inscricaoService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/corredor/{corredorId}")
    public ResponseEntity<List<InscricaoDTO>> getByCorredorId(@PathVariable String corredorId) {
        return ResponseEntity.ok(inscricaoService.findByCorredorId(corredorId));
    }

    @GetMapping("/corrida/{corridaId}")
    public ResponseEntity<List<InscricaoDTO>> getByCorridaId(@PathVariable String corridaId) {
        return ResponseEntity.ok(inscricaoService.findByCorridaId(corridaId));
    }

    @PostMapping
    public ResponseEntity<InscricaoDTO> create(@Valid @RequestBody InscricaoDTO dto) {
        InscricaoDTO criada = inscricaoService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(criada);
    }

    @PutMapping("/{id}")
    public ResponseEntity<InscricaoDTO> update(@PathVariable String id, @Valid @RequestBody InscricaoDTO dto) {
        return inscricaoService.update(id, dto)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (inscricaoService.deleteById(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
