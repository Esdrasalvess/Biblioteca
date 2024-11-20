package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Leitor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeitorRepository extends JpaRepository<Leitor, Integer> {
    List<Leitor> findByNomeContainingIgnoreCase(String nome);
}
