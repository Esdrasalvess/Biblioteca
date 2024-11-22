package com.meiobyte.biblioteca_v2.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_emprestimo;

    @Column(nullable = true)
    private String dataEmprestimo; // Alterado para String

    @Column(nullable = true)
    private String dataDevolucao; // Alterado para String

    @ManyToOne
    @JoinColumn(name = "id_leitor", nullable = true)
    private Leitor leitor;

    @ManyToOne
    @JoinColumn(name = "id_funcionario", nullable = true)
    private Funcionario funcionario;

    @ManyToOne
    @JoinColumn(name = "id_livro", nullable = true)
    private Livro livro;

    @Column(name = "status")
    private String status;

    public void setId(Integer id_emprestimo) {
        this.id_emprestimo = id_emprestimo;
    }
}
