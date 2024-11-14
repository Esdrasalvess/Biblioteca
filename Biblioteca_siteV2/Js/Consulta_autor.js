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

document.getElementById("consulta/autor/selecionar_nome").addEventListener("change", function() {
    toggleCampo('campo_autor_nome', 'consulta/autor/selecionar_nome');
});

document.getElementById("consulta/autor/selecionar_nacionalidade").addEventListener("change", function() {
    toggleCampo('campo_autor_nacionalidade', 'consulta/autor/selecionar_nacionalidade');
});

document.getElementById("consulta/autor/selecionar_id").addEventListener("change", function() {
    toggleCampo('campo_autor_id', 'consulta/autor/selecionar_id');
});

document.getElementById("consulta/autor/selecionar_qtd_livros").addEventListener("change", function() {
    toggleCampo('campo_autor_qtd_livros', 'consulta/autor/selecionar_qtd_livros');
});


});
