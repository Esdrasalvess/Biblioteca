package com.Biblioteca.biblioteca.Livro;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "livros")
@Entity(name = "Livro")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String autor;
    private Integer anoPublicacao;
    private String isbn;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private StatusLivro status;

    public void atualizarStatus(StatusLivro novoStatus) {
        this.status = novoStatus;
    }

}
