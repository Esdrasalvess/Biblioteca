package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro, Integer> {
}