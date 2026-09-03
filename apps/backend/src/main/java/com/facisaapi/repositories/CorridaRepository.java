package com.facisaapi.repositories;

import com.facisaapi.models.Corrida;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CorridaRepository extends MongoRepository<Corrida, String> {
}
