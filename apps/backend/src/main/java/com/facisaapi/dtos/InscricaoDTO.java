package com.facisaapi.dtos;

import com.facisaapi.enums.StatusInscricao;
import com.facisaapi.models.Inscricao;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record InscricaoDTO(
        String id,

        @NotBlank(message = "O ID do corredor é obrigatório")
        String corredorId,

        @NotBlank(message = "O ID da corrida é obrigatório")
        String corridaId,

        @NotNull(message = "A distância escolhida é obrigatória")
        @Positive(message = "A distância deve ser maior que zero")
        Double distanciaEscolhida,

        StatusInscricao status
) {
    public static InscricaoDTO fromEntity(Inscricao i) {
        return new InscricaoDTO(
                i.getId(),
                i.getCorredorId(),
                i.getCorridaId(),
                i.getDistanciaEscolhida(),
                i.getStatus()
        );
    }

    public Inscricao toEntity() {
        Inscricao i = new Inscricao();
        i.setId(this.id);
        i.setCorredorId(this.corredorId);
        i.setCorridaId(this.corridaId);
        i.setDistanciaEscolhida(this.distanciaEscolhida);
        i.setStatus(this.status != null ? this.status : StatusInscricao.PENDENTE);
        return i;
    }
}
