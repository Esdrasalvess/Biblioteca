package com.meiobyte.biblioteca_v2.model;



import jakarta.persistence.*;
import lombok.Data;

@Data //ma das mais úteis e populares annotations do Lombok. Ela é usada para gerar automaticamente os métodos getters, setters, equals(), hashCode() e toString()
@Entity
public class Autor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_autor;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(length = 100)
    private String nacionalidade;

    public void setId(Integer id_autor) {
        this.id_autor = id_autor;
    }
}
