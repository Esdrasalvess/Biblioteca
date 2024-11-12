package com.Biblioteca.biblioteca.Leitor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/leitores")
public class LeitorController {

    @Autowired
    private LeitorService leitorService;

    @PostMapping
    @Transactional
    public ResponseEntity<LeitorDto> cadastrar(@RequestBody @Valid DadosCriacaoLeitor dados) {
        LeitorDto leitor = leitorService.cadastrar(dados);
        return ResponseEntity.ok(leitor);
    }

    @GetMapping
    public ResponseEntity<List<LeitorDto>> listarTodos() {
        return ResponseEntity.ok(leitorService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LeitorDto> listarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(leitorService.listarPorId(id));
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<LeitorDto> atualizar(@PathVariable Long id, @RequestBody @Valid DadosAtualizacaoLeitor dados) {
        return ResponseEntity.ok(leitorService.atualizar(id, dados));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> apagar(@PathVariable Long id) {
        leitorService.apagar(id);
        return ResponseEntity.noContent().build();
    }
}
