package com.meiobyte.biblioteca_v2.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_funcionario;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(length = 50)
    private String cargo;

    public void setId(Integer id_funcionario) {
        this.id_funcionario = id_funcionario;
    }
}
