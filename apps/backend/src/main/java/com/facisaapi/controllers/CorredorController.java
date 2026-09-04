package com.facisaapi.controllers;

import com.facisaapi.dtos.CorredorDTO;
import com.facisaapi.services.CorredorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/corredores")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class CorredorController {

    private final CorredorService corredorService;

    @GetMapping
    public ResponseEntity<List<CorredorDTO>> getAll() {
        return ResponseEntity.ok(corredorService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CorredorDTO> getById(@PathVariable String id) {
        return corredorService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CorredorDTO> create(@Valid @RequestBody CorredorDTO dto) {
        CorredorDTO criado = corredorService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(criado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CorredorDTO> update(@PathVariable String id, @Valid @RequestBody CorredorDTO dto) {
        return corredorService.update(id, dto)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        if (corredorService.deleteById(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
