package com.facisaapi.dtos;

import com.facisaapi.models.Corrida;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

public record CorridaDTO(
        String id,

        @NotBlank(message = "O nome é obrigatório")
        String nome,

        @NotNull(message = "A data é obrigatória")
        LocalDate data,

        @NotBlank(message = "O local é obrigatório")
        String local,

        @NotEmpty(message = "Informe ao menos uma distância")
        List<Double> distancias
) {
    public static CorridaDTO fromEntity(Corrida c) {
        return new CorridaDTO(
                c.getId(),
                c.getNome(),
                c.getData(),
                c.getLocal(),
                c.getDistancias()
        );
    }

    public Corrida toEntity() {
        Corrida c = new Corrida();
        c.setId(this.id);
        c.setNome(this.nome);
        c.setData(this.data);
        c.setLocal(this.local);
        c.setDistancias(this.distancias);
        return c;
    }
}
