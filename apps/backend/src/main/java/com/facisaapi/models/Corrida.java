package com.facisaapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection = "corridas")
public class Corrida {
    @Id
    private String id;
    private String nome;
    private LocalDate data;
    private String local;
    private List<Double> distancias; // Ex: 3.0, 10.0, 21.0 km
}
