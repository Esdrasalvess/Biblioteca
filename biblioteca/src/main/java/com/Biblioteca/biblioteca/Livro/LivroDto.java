package com.Biblioteca.biblioteca.Livro;

public class LivroDto {
    private Long id;
    private String titulo;
    private String autor;
    private int anoPublicacao;
    private String isbn;
    private StatusLivro status;

    public LivroDto(Long id, String titulo, String autor, int anoPublicacao, String isbn, StatusLivro status) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getAutor() {
        return autor;
    }

    public int getAnoPublicacao() {
        return anoPublicacao;
    }

    public String getIsbn() {
        return isbn;
    }

    public StatusLivro getStatus() {
        return status;
    }
}
