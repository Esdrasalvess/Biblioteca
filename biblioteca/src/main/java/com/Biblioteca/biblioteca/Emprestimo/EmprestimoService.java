package com.Biblioteca.biblioteca.Emprestimo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmprestimoService {

    @Autowired
    private EmprestimoRepository emprestimoRepository;

    public EmprestimoDto create(DadosCriacaoEmprestimo dados) {
        Emprestimo emprestimo = new Emprestimo(null, dados.getLivro(), dados.getLeitor(), dados.getDataEmprestimo(), dados.getDataDevolucao());
        emprestimoRepository.save(emprestimo);
        return new EmprestimoDto(emprestimo.getId(), emprestimo.getLivro(), emprestimo.getLeitor(), emprestimo.getDataEmprestimo(), emprestimo.getDataDevolucao());
    }

    public List<EmprestimoDto> findAll() {
        List<Emprestimo> emprestimos = emprestimoRepository.findAll();
        return emprestimos.stream().map(emprestimo -> new EmprestimoDto(emprestimo.getId(), emprestimo.getLivro(), emprestimo.getLeitor(), emprestimo.getDataEmprestimo(), emprestimo.getDataDevolucao())).toList();
    }

    public EmprestimoDto findById(Long id) {
        Optional<Emprestimo> emprestimo = emprestimoRepository.findById(id);
        return emprestimo.map(e -> new EmprestimoDto(e.getId(), e.getLivro(), e.getLeitor(), e.getDataEmprestimo(), e.getDataDevolucao()))
                .orElseThrow(() -> new RuntimeException("Empréstimo não encontrado"));
    }

    public EmprestimoDto update(Long id, DadosAtualizacaoEmprestimo dados) {
        Emprestimo emprestimo = emprestimoRepository.findById(id).orElseThrow(() -> new RuntimeException("Empréstimo não encontrado"));
        emprestimo.atualizarDataDevolucao(dados.getDataDevolucao());
        emprestimoRepository.save(emprestimo);
        return new EmprestimoDto(emprestimo.getId(), emprestimo.getLivro(), emprestimo.getLeitor(), emprestimo.getDataEmprestimo(), emprestimo.getDataDevolucao());
    }

    public void delete(Long id) {
        emprestimoRepository.deleteById(id);
    }
}
