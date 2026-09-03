package com.facisaapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "inscricoes")
public class Inscricao {
    @Id
    private String id;
    private String corredorId;
    private String corridaId;
    private Double distanciaEscolhida;
    private String status; // Ex: PENDENTE, PAGO, CANCELADO
}
