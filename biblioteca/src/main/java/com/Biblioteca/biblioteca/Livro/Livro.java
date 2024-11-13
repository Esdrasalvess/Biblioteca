package com.Biblioteca.biblioteca.Livro;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Livro {
    @Id
    private Long id;
    private String titulo;
    private String autor;
    private int anoPublicacao;
    private String CodigoLivro;
    private StatusLivro status;

    public Livro(Long id, String titulo, String autor, int anoPublicacao, String CodigoLivro, StatusLivro status) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.CodigoLivro = CodigoLivro;
        this.status = status;
    }

    public Livro() {

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

    public String getCodigoLivro() {
        return CodigoLivro;
    }

    public StatusLivro getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public void setAnoPublicacao(int anoPublicacao) {
        this.anoPublicacao = anoPublicacao;
    }

    public void setCodigoLivro(String CodigoLivro) {
        this.CodigoLivro = CodigoLivro;
    }

    public void setStatus(StatusLivro status) {
        this.status = status;
    }

    public void atualizarStatus(String status) {
    }
}

enum StatusLivro {
    DISPONIVEL, EMPRESTADO, RESERVADO
}
