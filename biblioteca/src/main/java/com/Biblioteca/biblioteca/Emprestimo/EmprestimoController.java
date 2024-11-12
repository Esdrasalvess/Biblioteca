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

    @PostMapping
    public ResponseEntity<EmprestimoDto> create(@RequestBody @Valid DadosCriacaoEmprestimo dados) {
        EmprestimoDto novoEmprestimo = emprestimoService.create(dados);
        return ResponseEntity.ok(novoEmprestimo);
    }

    @GetMapping
    public ResponseEntity<List<EmprestimoDto>> findAll() {
        List<EmprestimoDto> emprestimos = emprestimoService.findAll();
        return ResponseEntity.ok(emprestimos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmprestimoDto> findById(@PathVariable Long id) {
        EmprestimoDto emprestimo = emprestimoService.findById(id);
        return ResponseEntity.ok(emprestimo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmprestimoDto> update(@PathVariable Long id, @RequestBody @Valid DadosAtualizacaoEmprestimo dados) {
        EmprestimoDto emprestimoAtualizado = emprestimoService.update(id, dados);
        return ResponseEntity.ok(emprestimoAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        emprestimoService.delete(id);
        return ResponseEntity.noContent().build();
    }
    @PostMapping
    public String createEmprestimo(@Valid @RequestBody EmprestimoDto emprestimoDto) {
        return "Empréstimo criado!";
    }
}
