package com.meiobyte.biblioteca_v2.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_livro;

    @Column(nullable = false, length = 255)
    private String titulo;

    @Column(name = "ano_publicacao")
    private Integer anoPublicacao;

    @ManyToOne
    @JoinColumn(name = "id_autor", nullable = false)
    private Autor autor;

    public void setId(Integer id_livro) {
        this.id_livro = id_livro;
    }

    public Autor getAutor() {
        return autor;
    }

    public void setAutor(Autor autor) {
        this.autor = autor;
    }
}
