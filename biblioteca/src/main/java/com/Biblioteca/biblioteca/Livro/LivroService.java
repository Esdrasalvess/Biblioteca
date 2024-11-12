package com.Biblioteca.biblioteca.Livro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public LivroDto cadastrar(DadosCadastroLivro dados) {
        Livro livro = new Livro(null, dados.getTitulo(), dados.getAutor(), dados.getAnoPublicacao(), dados.getCodigoLivro(), StatusLivro.DISPONIVEL);
        livroRepository.save(livro);
        return new LivroDto(livro.getId(), livro.getTitulo(), livro.getAutor(), livro.getAnoPublicacao(), livro.getCodigoLivro(), livro.getStatus());
    }

    public List<LivroDto> listarTodos() {
        List<Livro> livros = livroRepository.findAll();
        return livros.stream().map(livro -> new LivroDto(livro.getId(), livro.getTitulo(), livro.getAutor(), livro.getAnoPublicacao(), livro.getCodigoLivro(), livro.getStatus())).toList();
    }

    public LivroDto listarPorId(Long id) {
        Optional<Livro> livro = livroRepository.findById(id);
        return livro.map(l -> new LivroDto(l.getId(), l.getTitulo(), l.getAutor(), l.getAnoPublicacao(), l.getCodigoLivro(), l.getStatus()))
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));
    }

    public LivroDto atualizar(Long id, DadosAtualizacaoLivro dados) {
        Livro livro = livroRepository.findById(id).orElseThrow(() -> new RuntimeException("Livro não encontrado"));
        livro.atualizarStatus(dados.getStatus());
        livroRepository.save(livro);
        return new LivroDto(livro.getId(), livro.getTitulo(), livro.getAutor(), livro.getAnoPublicacao(), livro.getCodigoLivro(), livro.getStatus());
    }

    public void apagar(Long id) {
        livroRepository.deleteById(id);
    }
}
