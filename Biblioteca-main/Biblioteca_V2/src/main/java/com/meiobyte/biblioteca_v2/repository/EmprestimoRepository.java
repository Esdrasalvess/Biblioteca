package com.meiobyte.biblioteca_v2.repository;

import com.meiobyte.biblioteca_v2.model.Emprestimo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmprestimoRepository extends JpaRepository<Emprestimo, Integer> {

    @Query("SELECT * FROM Emprestimo WHERE id_leitor = :leitorId;")
    List<Emprestimo> buscarPorLeitor(@Param("leitorId") Integer leitorId);

    @Query("SELECT * FROM Emprestimo WHERE id_funcionario = :funcionarioId;")
    List<Emprestimo> buscarPorFuncionario(@Param("funcionarioId") Integer funcionarioId);

    @Query("SELECT * FROM Emprestimo WHERE data_emprestimo BETWEEN :dataInicial AND :dataFinal;")
    List<Emprestimo> buscarPorData(@Param("dataInicial") String dataInicial, @Param("dataFinal") String dataFinal);

    @Query("SELECT * FROM Emprestimo WHERE status = :status;")
    List<Emprestimo> buscarNaoEmprestado(@Param("status") String status);
}
