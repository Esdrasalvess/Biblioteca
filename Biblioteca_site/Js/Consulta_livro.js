document.addEventListener("DOMContentLoaded", function() {
    
    function toggleCampo(id, checkboxId) {
        const campo = document.getElementById(id);
        const checkbox = document.getElementById(checkboxId);
        
       
        if (checkbox.checked) {
            campo.style.display = 'inline';
        } else {
            campo.style.display = 'none';
        }
    }

 // Adiciona ouvintes de evento para os checkboxes de filtro de visibilidade (caso queira controlar a visibilidade também)
 document.getElementById("consulta/livro/selecionar_titulo").addEventListener("change", function() {
    toggleCampo('campo_livro_titulo', 'consulta/livro/selecionar_titulo');
});

document.getElementById("consulta/livro/selecionar_autor").addEventListener("change", function() {
    toggleCampo('campo_livro_autor', 'consulta/livro/selecionar_autor');
});

document.getElementById("consulta/livro/selecionar_nacionalidade").addEventListener("change", function() {
    toggleCampo('campo_livro_nacionalidade', 'consulta/livro/selecionar_nacionalidade');
});

document.getElementById("consulta/livro/selecionar_ano").addEventListener("change", function() {
    toggleCampo('campo_livro_ano', 'consulta/livro/selecionar_ano');
});

document.getElementById("consulta/livro/selecionar_codigo").addEventListener("change", function() {
    toggleCampo('campo_livro_codigo', 'consulta/livro/selecionar_codigo');
});
});
