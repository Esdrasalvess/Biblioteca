package com.Biblioteca.biblioteca.Emprestimo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/emprestimos")
public class EmprestimoController {

    @Autowired
    private EmprestimoService emprestimoService;

    // Criar um novo empréstimo
    @PostMapping
    public ResponseEntity<EmprestimoDto> create(@RequestBody @Valid DadosCriacaoEmprestimo dados) {
        EmprestimoDto novoEmprestimo = emprestimoService.create(dados);
        return ResponseEntity.ok(novoEmprestimo);
    }

    // Buscar todos os empréstimos
    @GetMapping
    public ResponseEntity<List<EmprestimoDto>> findAll() {
        List<EmprestimoDto> emprestimos = emprestimoService.findAll();
        return ResponseEntity.ok(emprestimos);
    }

    // Buscar empréstimo por ID
    @GetMapping("/{id}")
    public ResponseEntity<EmprestimoDto> findById(@PathVariable Long id) {
        EmprestimoDto emprestimo = emprestimoService.findById(id);
        return ResponseEntity.ok(emprestimo);
    }

    // Atualizar um empréstimo
    @PutMapping("/{id}")
    public ResponseEntity<EmprestimoDto> update(@PathVariable Long id, @RequestBody @Valid DadosAtualizacaoEmprestimo dados) {
        EmprestimoDto emprestimoAtualizado = emprestimoService.update(id, dados);
        return ResponseEntity.ok(emprestimoAtualizado);
    }

    // Deletar um empréstimo
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        emprestimoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
