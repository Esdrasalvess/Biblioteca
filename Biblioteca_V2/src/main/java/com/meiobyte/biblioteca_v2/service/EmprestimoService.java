package com.meiobyte.biblioteca_v2.service;

import com.meiobyte.biblioteca_v2.model.Emprestimo;
import com.meiobyte.biblioteca_v2.repository.EmprestimoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmprestimoService {

    @Autowired
    private EmprestimoRepository emprestimoRepository;

    public List<Emprestimo> listarTodos() {
        return emprestimoRepository.findAll();
    }

    public Optional<Emprestimo> buscarPorId(Integer id) {
        return emprestimoRepository.findById(id);
    }

    public List<Emprestimo> buscarPorLeitor(Integer leitorId) {
        return emprestimoRepository.buscarPorLeitor(leitorId); 
    }

    public List<Emprestimo> buscarPorFuncionario(Integer leitorId) {
        return emprestimoRepository.buscarPorFuncionario(leitorId);  
    }

    public List<Emprestimo> buscarPorData(String dataInicial, String dataFinal) {
        return emprestimoRepository.buscarPorData(dataInicial, dataFinal);  
    }

    public List<Emprestimo> buscarNaoEmprestado() {
        return emprestimoRepository.buscarNaoEmprestado("NAO_EMPRESTADO"); 
    }

    public Emprestimo salvar(Emprestimo emprestimo) {
        return emprestimoRepository.save(emprestimo);
    }

    public Emprestimo atualizar(Emprestimo emprestimo) {
        return emprestimoRepository.save(emprestimo);
    }

    public void deletar(Integer id) {
        emprestimoRepository.deleteById(id);
    }

    public List<Emprestimo> buscarPorLivro(Integer livroId) {
        return emprestimoRepository.buscarPorLivro(livroId);
    }

}
