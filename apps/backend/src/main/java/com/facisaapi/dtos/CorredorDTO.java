package com.facisaapi.dtos;

import com.facisaapi.models.Corredor;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record CorredorDTO(
        String id,

        @NotBlank(message = "O nome é obrigatório")
        String nome,

        @NotBlank(message = "O CPF é obrigatório")
        String cpf,

        @NotNull(message = "A data de nascimento é obrigatória")
        LocalDate dataNascimento,

        @NotBlank(message = "O gênero é obrigatório")
        String genero
) {
    public static CorredorDTO fromEntity(Corredor c) {
        return new CorredorDTO(
                c.getId(),
                c.getNome(),
                c.getCpf(),
                c.getDataNascimento(),
                c.getGenero()
        );
    }

    public Corredor toEntity() {
        Corredor c = new Corredor();
        c.setId(this.id);
        c.setNome(this.nome);
        c.setCpf(this.cpf);
        c.setDataNascimento(this.dataNascimento);
        c.setGenero(this.genero);
        return c;
    }
}
