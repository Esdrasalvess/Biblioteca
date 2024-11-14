package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Emprestimo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmprestimoRepository extends JpaRepository<Emprestimo, Integer> {

    @Query("SELECT e FROM Emprestimo e WHERE e.leitor.id = :leitorId")
    List<Emprestimo> buscarPorLeitor(@Param("leitorId") Integer leitorId);

    @Query("SELECT e FROM Emprestimo e WHERE e.funcionario.id = :funcionarioId")
    List<Emprestimo> buscarPorFuncionario(@Param("funcionarioId") Integer funcionarioId);

    @Query("SELECT e FROM Emprestimo e WHERE e.dataEmprestimo BETWEEN :dataInicial AND :dataFinal")
    List<Emprestimo> buscarPorData(@Param("dataInicial") String dataInicial, @Param("dataFinal") String dataFinal);

    @Query("SELECT e FROM Emprestimo e WHERE e.status = :status")
    List<Emprestimo> buscarNaoEmprestado(@Param("status") String status);

}
