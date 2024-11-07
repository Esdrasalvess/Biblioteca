package com.Biblioteca.biblioteca.Emprestimo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DadosAtualizacaoEmprestimo {

    private LocalDate dataDevolucao;
}
