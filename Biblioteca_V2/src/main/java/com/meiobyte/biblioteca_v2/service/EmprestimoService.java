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

    public Emprestimo salvar(Emprestimo emprestimo) {
        return emprestimoRepository.save(emprestimo);
    }

    public Emprestimo atualizar(Emprestimo emprestimo) {
        return emprestimoRepository.save(emprestimo);
    }

    public void deletar(Integer id) {
        emprestimoRepository.deleteById(id);
    }
}
