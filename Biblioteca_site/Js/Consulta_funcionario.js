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

    // Adiciona ouvintes de evento para os checkboxes de filtro de pesquisa
    document.getElementById("consulta/funcionario/selecionar_nome").addEventListener("change", function() {
        toggleCampo('campo_funcionario_nome', 'consulta/funcionario/selecionar_nome');
    });

    document.getElementById("consulta/funcionario/selecionar_cargo").addEventListener("change", function() {
        toggleCampo('campo_funcionario_cargo', 'consulta/funcionario/selecionar_cargo');
    });

    document.getElementById("consulta/funcionario/selecionar_codigo").addEventListener("change", function() {
        toggleCampo('campo_funcionario_codigo', 'consulta/funcionario/selecionar_codigo');
    });


    // Adiciona ouvintes de evento para os checkboxes de filtro de visibilidade (caso queira controlar a visibilidade também)
    document.getElementById("consulta/livro/selecionar_titulo").addEventListener("change", function() {
        toggleCampo('campo_livro_titulo', 'consulta/livro/selecionar_titulo');
    });

    });
