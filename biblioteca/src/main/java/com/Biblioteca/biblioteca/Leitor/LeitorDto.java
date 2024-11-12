package com.Biblioteca.biblioteca.Leitor;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LeitorDto {

    private Long id;
    private String nome;
    private String endereco;
    private String telefone;
}
