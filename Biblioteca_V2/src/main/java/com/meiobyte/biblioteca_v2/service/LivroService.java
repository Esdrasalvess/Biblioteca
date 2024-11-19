package com.meiobyte.biblioteca_v2.service;

import com.meiobyte.biblioteca_v2.model.Livro;
import com.meiobyte.biblioteca_v2.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    public Optional<Livro> buscarPorId(Integer id) {
        return livroRepository.findById(id);
    }

    public Livro salvar(Livro livro) {
        return livroRepository.save(livro);
    }

    public Livro atualizar(Livro livro) {
        return livroRepository.save(livro);
    }

    public void deletar(Integer id) {
        livroRepository.deleteById(id);
    }
    public List<Livro> buscarPorAutor(Integer autorId) {
        return livroRepository.findByAutorId(autorId);
    }

    public List<Livro> buscarPorTitulo(String titulo) {
        return livroRepository.findByTituloContainingIgnoreCase(titulo);
    }

    public List<Livro> buscarPorAutor(String autorNome) {
        return livroRepository.findByAutorNomeContainingIgnoreCase(autorNome);
    }

    public List<Livro> buscarPorAno(Integer ano) {
        return livroRepository.findByAnoPublicacao(ano);
    }
}