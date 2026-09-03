package com.facisaapi.repositories;

import com.facisaapi.models.Corredor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CorredorRepository extends MongoRepository<Corredor, String> {
}
