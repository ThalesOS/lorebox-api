package com.facisaapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "corredores")
public class Corredor {
    @Id
    private String id;
    private String nome;
    private String cpf;
    private LocalDate dataNascimento;
    private String genero;
}
