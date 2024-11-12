package com.Biblioteca.biblioteca.Livro;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;
import javax.validation.Valid;
import java.util.List;

@RequestMapping("livros")
@SecurityRequirement(name = "bearer-key")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @PostMapping
    @Transactional
    public ResponseEntity<LivroDto> cadastrar(@RequestBody @Valid DadosCadastroLivro dados) {
        var dto = livroService.cadastrar(dados);
        return ResponseEntity.ok(dto);
    }

    @GetMapping
    public ResponseEntity<List<LivroDto>> listarTodos() {
        var livros = livroService.listarTodos();
        return ResponseEntity.ok(livros);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LivroDto> listarPorId(@PathVariable Long id) {
        var livro = livroService.listarPorId(id);
        return ResponseEntity.ok(livro);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<LivroDto> atualizar(@PathVariable Long id, @RequestBody @Valid DadosAtualizacaoLivro dados) {
        var livroAtualizado = livroService.atualizar(id, dados);
        return ResponseEntity.ok(livroAtualizado);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> apagar(@PathVariable Long id) {
        livroService.apagar(id);
        return ResponseEntity.noContent().build();
    }

    //TESTANDO SE DEU BOM
    @GetMapping("/teste")
    public ResponseEntity<String> teste() {
        return ResponseEntity.ok("Aplicação está funcionando!");
    }

}
