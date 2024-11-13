package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
}