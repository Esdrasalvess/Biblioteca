package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Integer> {
    List<Livro> findByAutorId(Integer autorId);  // Método para buscar livros pelo ID do autor
}