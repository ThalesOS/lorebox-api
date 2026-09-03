package com.facisaapi.controllers;

import com.facisaapi.models.Corrida;
import com.facisaapi.services.CorridaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/corridas")
@CrossOrigin(origins = "*")
public class CorridaController {

    @Autowired
    private CorridaService corridaService;

    @GetMapping
    public List<Corrida> getAll() {
        return corridaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Corrida> getById(@PathVariable String id) {
        Optional<Corrida> corrida = corridaService.findById(id);
        return corrida.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Corrida create(@RequestBody Corrida corrida) {
        return corridaService.save(corrida);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable String id) {
        corridaService.deleteById(id);
        return ResponseEntity.ok("Corrida excluída com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Corrida> update(@PathVariable String id, @RequestBody Corrida corridaAtualizada) {
        if (!corridaService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        corridaAtualizada.setId(id);
        return ResponseEntity.ok(corridaService.save(corridaAtualizada));
    }
}
