package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Emprestimo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmprestimoRepository extends JpaRepository<Emprestimo, Integer> {

    List<Emprestimo> findByLeitorId(Integer leitorId);
    
    List<Emprestimo> findByFuncionarioId(Integer funcionarioId);
    
    List<Emprestimo> findByDataBetween(String dataInicial, String dataFinal);
    
    List<Emprestimo> findByStatus(String status);
}
