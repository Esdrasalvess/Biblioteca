package com.meiobyte.biblioteca_v2.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_emprestimo;

    @Column(nullable = false)
    private LocalDate dataEmprestimo;

    @Column
    private LocalDate dataDevolucao;

    @ManyToOne
    @JoinColumn(name = "id_leitor", nullable = false)
    private Leitor leitor;

    @ManyToOne
    @JoinColumn(name = "id_funcionario", nullable = false)
    private Funcionario funcionario;

    @Column(name = "status")
    private String status;

    public void setId(Integer id_emprestimo) {
        this.id_emprestimo = id_emprestimo;
    }

}
