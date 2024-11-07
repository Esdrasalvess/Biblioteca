package com.Biblioteca.biblioteca.Emprestimo;

import com.Biblioteca.biblioteca.Livro.Livro;
import com.Biblioteca.biblioteca.Leitor.Leitor;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class EmprestimoDto {

    private Long id;
    private Livro livro;
    private Leitor leitor;
    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucao;
}
