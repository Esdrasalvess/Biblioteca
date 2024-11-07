package com.Biblioteca.biblioteca.Emprestimo;

import com.Biblioteca.biblioteca.Livro.Livro;
import com.Biblioteca.biblioteca.Leitor.Leitor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DadosCriacaoEmprestimo {

    private Livro livro;
    private Leitor leitor;
    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucao;
}
