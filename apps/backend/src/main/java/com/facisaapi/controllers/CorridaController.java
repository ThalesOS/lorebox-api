package com.facisaapi.controllers;

import com.facisaapi.dtos.CorridaDTO;
import com.facisaapi.services.CorridaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/corridas")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class CorridaController {

    private final CorridaService corridaService;

    @GetMapping
    public ResponseEntity<List<CorridaDTO>> getAll() {
        return ResponseEntity.ok(corridaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CorridaDTO> getById(@PathVariable String id) {
        return corridaService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CorridaDTO> create(@Valid @RequestBody CorridaDTO dto) {
        CorridaDTO criada = corridaService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(criada);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CorridaDTO> update(@PathVariable String id, @Valid @RequestBody CorridaDTO dto) {
        return corridaService.update(id, dto)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (corridaService.deleteById(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
