package com.Biblioteca.biblioteca.Leitor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LeitorService {

    @Autowired
    private LeitorRepository leitorRepository;

    public LeitorDto cadastrar(DadosCriacaoLeitor dados) {
        Leitor leitor = new Leitor(null, dados.getNome(), dados.getEndereco(), dados.getTelefone());
        leitorRepository.save(leitor);
        return new LeitorDto(leitor.getId(), leitor.getNome(), leitor.getEndereco(), leitor.getTelefone());
    }

    public List<LeitorDto> listarTodos() {
        return leitorRepository.findAll().stream()
                .map(leitor -> new LeitorDto(leitor.getId(), leitor.getNome(), leitor.getEndereco(), leitor.getTelefone()))
                .collect(Collectors.toList());
    }

    public LeitorDto listarPorId(Long id) {
        Leitor leitor = leitorRepository.findById(id).orElseThrow(() -> new RuntimeException("Leitor não encontrado"));
        return new LeitorDto(leitor.getId(), leitor.getNome(), leitor.getEndereco(), leitor.getTelefone());
    }

    public LeitorDto atualizar(Long id, DadosAtualizacaoLeitor dados) {
        Leitor leitor = leitorRepository.findById(id).orElseThrow(() -> new RuntimeException("Leitor não encontrado"));
        leitor.atualizarInformacoes(dados.getNome(), dados.getEndereco(), dados.getTelefone());
        leitorRepository.save(leitor);
        return new LeitorDto(leitor.getId(), leitor.getNome(), leitor.getEndereco(), leitor.getTelefone());
    }

    public void apagar(Long id) {
        if (leitorRepository.existsById(id)) {
            leitorRepository.deleteById(id);
        } else {
            throw new RuntimeException("Leitor não encontrado");
        }
    }
}
