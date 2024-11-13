package com.meiobyte.biblioteca_v2.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Inclui {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_inclui;

    @ManyToOne
    @JoinColumn(name = "id_emprestimo", nullable = false)
    private Emprestimo emprestimo;

    @ManyToOne
    @JoinColumn(name = "id_livro", nullable = false)
    private Livro livro;

    public void setId(Integer id_inclui) {
        this.id_inclui = id_inclui;
    }
}
