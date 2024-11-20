package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LivroRepository extends JpaRepository<Livro, Integer> {
    List<Livro> findByAutorId(Integer autorId);
    List<Livro> findByTituloContainingIgnoreCase(String titulo);
    List<Livro> findByAnoPublicacao(Integer ano);
    List<Livro> findByAutorNomeContainingIgnoreCase(String autorNome);
}
