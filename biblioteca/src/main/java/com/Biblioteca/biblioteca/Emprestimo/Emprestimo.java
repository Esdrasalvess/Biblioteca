package com.Biblioteca.biblioteca.Emprestimo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import com.Biblioteca.biblioteca.Livro.Livro;
import com.Biblioteca.biblioteca.Leitor.Leitor;

import java.time.LocalDate;

@Table(name = "emprestimos")
@Entity(name = "Emprestimo")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "livro_id")
    private Livro livro;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "leitor_id")
    private Leitor leitor;

    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucao;

    public void atualizarDataDevolucao(LocalDate novaDataDevolucao) {
        this.dataDevolucao = novaDataDevolucao;
    }
}
