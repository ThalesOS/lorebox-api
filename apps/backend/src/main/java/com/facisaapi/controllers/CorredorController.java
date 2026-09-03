package com.facisaapi.controllers;

import com.facisaapi.models.Corredor;
import com.facisaapi.services.CorredorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/corredores")
@CrossOrigin(origins = "*") // Para permitir requisições do Angular futuramente
public class CorredorController {

    @Autowired
    private CorredorService corredorService;

    @GetMapping
    public List<Corredor> getAll() {
        return corredorService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Corredor> getById(@PathVariable String id) {
        Optional<Corredor> corredor = corredorService.findById(id);
        return corredor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Corredor create(@RequestBody Corredor corredor) {
        return corredorService.save(corredor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable String id) {
        corredorService.deleteById(id);
        return ResponseEntity.ok("Corredor excluído com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Corredor> update(@PathVariable String id, @RequestBody Corredor corredorAtualizado) {
        if (!corredorService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        corredorAtualizado.setId(id);
        return ResponseEntity.ok(corredorService.save(corredorAtualizado));
    }
}
