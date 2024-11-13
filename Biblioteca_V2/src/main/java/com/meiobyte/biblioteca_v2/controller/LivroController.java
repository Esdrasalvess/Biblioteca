package com.meiobyte.biblioteca_v2.controller;

import com.meiobyte.biblioteca_v2.model.Livro;
import com.meiobyte.biblioteca_v2.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livros")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    public List<Livro> listarTodos() {
        return livroService.listarTodos();
    }

    @GetMapping("/{id}")
    public Livro buscarPorId(@PathVariable Integer id) {
        return livroService.buscarPorId(id).orElse(null);
    }

    @PostMapping
    public Livro criar(@RequestBody Livro livro) {
        return livroService.salvar(livro);
    }

    @PutMapping("/{id}")
    public Livro atualizar(@PathVariable Integer id, @RequestBody Livro livro) {
        livro.setId(id);
        return livroService.atualizar(livro);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        livroService.deletar(id);
    }
}