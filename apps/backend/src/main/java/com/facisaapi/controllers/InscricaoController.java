package com.facisaapi.controllers;

import com.facisaapi.models.Inscricao;
import com.facisaapi.services.InscricaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inscricoes")
@CrossOrigin(origins = "*")
public class InscricaoController {

    @Autowired
    private InscricaoService inscricaoService;

    @GetMapping
    public List<Inscricao> getAll() {
        return inscricaoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inscricao> getById(@PathVariable String id) {
        Optional<Inscricao> inscricao = inscricaoService.findById(id);
        return inscricao.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/corredor/{corredorId}")
    public List<Inscricao> getByCorredorId(@PathVariable String corredorId) {
        return inscricaoService.findByCorredorId(corredorId);
    }

    @GetMapping("/corrida/{corridaId}")
    public List<Inscricao> getByCorridaId(@PathVariable String corridaId) {
        return inscricaoService.findByCorridaId(corridaId);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Inscricao inscricao) {
        try {
            Inscricao novaInscricao = inscricaoService.save(inscricao);
            return ResponseEntity.ok(novaInscricao);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage()); // Retorna 400 com a mensagem de erro
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable String id) {
        inscricaoService.deleteById(id);
        return ResponseEntity.ok("Inscrição excluída com sucesso!");
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable String id, @RequestBody Inscricao inscricaoAtualizada) {
        if (!inscricaoService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        inscricaoAtualizada.setId(id);
        try {
            return ResponseEntity.ok(inscricaoService.save(inscricaoAtualizada));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
