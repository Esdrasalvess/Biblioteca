package com.Biblioteca.biblioteca.Funcionario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @PostMapping
    public ResponseEntity<FuncionarioDto> create(@RequestBody @Valid DadosCriacaoFuncionario dados) {
        FuncionarioDto novoFuncionario = funcionarioService.create(dados);
        return ResponseEntity.ok(novoFuncionario);
    }

    @GetMapping
    public ResponseEntity<List<FuncionarioDto>> findAll() {
        List<FuncionarioDto> funcionarios = funcionarioService.findAll();
        return ResponseEntity.ok(funcionarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioDto> findById(@PathVariable Long id) {
        FuncionarioDto funcionario = funcionarioService.findById(id);
        return ResponseEntity.ok(funcionario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioDto> update(@PathVariable Long id, @RequestBody @Valid DadosAtualizacaoFuncionario dados) {
        FuncionarioDto funcionarioAtualizado = funcionarioService.update(id, dados);
        return ResponseEntity.ok(funcionarioAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        funcionarioService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
