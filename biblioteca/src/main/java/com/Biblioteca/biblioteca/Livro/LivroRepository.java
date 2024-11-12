package com.Biblioteca.biblioteca.Livro;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface LivroRepository extends JpaRepository<Livro, Long> {

    boolean existsByIsbn(String isbn);

    Optional<Livro> findByTitulo(String titulo);

    long countByStatus(StatusLivro status);

}
