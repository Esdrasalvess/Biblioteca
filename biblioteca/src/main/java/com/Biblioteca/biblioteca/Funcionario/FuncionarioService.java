package com.Biblioteca.biblioteca.Funcionario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public FuncionarioDto create(DadosCriacaoFuncionario dados) {
        Funcionario funcionario = new Funcionario(null, dados.getNome(), dados.getCargo());
        funcionario = funcionarioRepository.save(funcionario);
        return new FuncionarioDto(funcionario);
    }

    public List<FuncionarioDto> findAll() {
        return funcionarioRepository.findAll()
                .stream()
                .map(FuncionarioDto::new)
                .collect(Collectors.toList());
    }

    public FuncionarioDto findById(Long id) {
        Funcionario funcionario = funcionarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funcionário não encontrado"));
        return new FuncionarioDto(funcionario);
    }

    public FuncionarioDto update(Long id, DadosAtualizacaoFuncionario dados) {
        Funcionario funcionario = funcionarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funcionário não encontrado"));

        funcionario.atualizarDados(dados.getNome(), dados.getCargo());
        funcionarioRepository.save(funcionario);

        return new FuncionarioDto(funcionario);
    }

    public void delete(Long id) {
        if (!funcionarioRepository.existsById(id)) {
            throw new RuntimeException("Funcionário não encontrado");
        }
        funcionarioRepository.deleteById(id);
    }
}
