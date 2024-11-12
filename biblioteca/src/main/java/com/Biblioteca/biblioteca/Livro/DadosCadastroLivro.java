package com.Biblioteca.biblioteca.Livro;

public class DadosCadastroLivro {
    private String titulo;
    private String autor;
    private String CodigoLivro;
    private int anoPublicacao;

    public DadosCadastroLivro(String titulo, String autor, String CodigoLivro, int anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.CodigoLivro = CodigoLivro;
        this.anoPublicacao = anoPublicacao;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getCodigoLivro() {
        return CodigoLivro;
    }

    public void setCodigoLivro(String CodigoLivro) {
        this.CodigoLivro = CodigoLivro;
    }

    public int getAnoPublicacao() {
        return anoPublicacao;
    }
}
