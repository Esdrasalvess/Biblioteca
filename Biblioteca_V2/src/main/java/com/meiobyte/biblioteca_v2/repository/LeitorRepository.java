package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Leitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeitorRepository extends JpaRepository<Leitor, Integer> {
}