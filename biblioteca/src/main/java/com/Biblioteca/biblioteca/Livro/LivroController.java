package com.Biblioteca.biblioteca.Livro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("livros")
@SecurityRequirement(name = "bearer-key")
public class LivroController {

    @Autowired
    private LivroService livroService;

    // Cadastrar um novo livro
    @PostMapping
    @Transactional
    public ResponseEntity<LivroDTO> cadastrar(@RequestBody @Valid DadosCadastroLivro dados) {
        var dto = livroService.cadastrar(dados);
        return ResponseEntity.ok(dto);
    }

    // Listar todos os livros
    @GetMapping
    public ResponseEntity<List<LivroDTO>> listarTodos() {
        var livros = livroService.listarTodos();
        return ResponseEntity.ok(livros);
    }

    // Listar livro por ID
    @GetMapping("/{id}")
    public ResponseEntity<LivroDTO> listarPorId(@PathVariable Long id) {
        var livro = livroService.listarPorId(id);
        return ResponseEntity.ok(livro);
    }

    // Atualizar um livro por ID
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<LivroDTO> atualizar(@PathVariable Long id, @RequestBody @Valid DadosAtualizacaoLivro dados) {
        var livroAtualizado = livroService.atualizar(id, dados);
        return ResponseEntity.ok(livroAtualizado);
    }

    // Apagar um livro por ID
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> apagar(@PathVariable Long id) {
        livroService.apagar(id);
        return ResponseEntity.noContent().build();
    }

}
