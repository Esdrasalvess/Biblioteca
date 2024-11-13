package com.meiobyte.biblioteca_v2.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Leitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_leitor;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(length = 255)
    private String endereco;

    @Column(length = 20)
    private String telefone;

    public void setId(Integer id_leitor) {
        this.id_leitor = id_leitor;
    }
}
