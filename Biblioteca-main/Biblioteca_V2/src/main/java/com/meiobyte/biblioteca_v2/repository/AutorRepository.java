package com.meiobyte.biblioteca_v2.repository;


import com.meiobyte.biblioteca_v2.model.Autor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutorRepository extends JpaRepository<Autor, Integer> {
}