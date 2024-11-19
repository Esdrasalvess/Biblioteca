package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
    List<Funcionario> findByNomeContainingIgnoreCase(String nome);
    List<Funcionario> findByCargoContainingIgnoreCase(String cargo);
}