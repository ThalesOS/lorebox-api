package com.facisaapi.repositories;

import com.facisaapi.models.Inscricao;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InscricaoRepository extends MongoRepository<Inscricao, String> {
    List<Inscricao> findByCorredorId(String corredorId);
    List<Inscricao> findByCorridaId(String corridaId);
}
