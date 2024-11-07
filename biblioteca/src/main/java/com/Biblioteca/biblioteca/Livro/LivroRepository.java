package com.Biblioteca.biblioteca.Livro;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface LivroRepository extends JpaRepository<Livro, Long> {

    // Verifica se existe um livro com o mesmo ISBN (útil para evitar duplicados)
    boolean existsByIsbn(String isbn);

    // Encontra um livro pelo título
    Optional<Livro> findByTitulo(String titulo);

    // Conta quantos livros estão disponíveis
    long countByStatus(StatusLivro status);

}
