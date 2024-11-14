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

   
    
    document.getElementById("consulta/emprestimo/selecionar_leitor").addEventListener("change", function() {
        toggleCampo('campo_emprestimo_leitor', 'consulta/emprestimo/selecionar_leitor');
    });

  
    document.getElementById("consulta/emprestimo/selecionar_funcionario_responsavel").addEventListener("change", function() {
        toggleCampo('campo_emprestimo_funcionario_responsavel', 'consulta/emprestimo/selecionar_funcionario_responsavel');
    });

    document.getElementById("consulta/emprestimo/selecionar_livro").addEventListener("change", function() {
        toggleCampo('campo_emprestimo_livro', 'consulta/emprestimo/selecionar_livro');
    });


    document.getElementById("consulta/emprestimo/selecionar_data").addEventListener("change", function() {
        toggleCampo('campo_emprestimo_data_inicial', 'consulta/emprestimo/selecionar_data');
    });

    document.getElementById("consulta/emprestimo/selecionar_data").addEventListener("change", function() {
        toggleCampo('campo_emprestimo_data_final', 'consulta/emprestimo/selecionar_data');
    });

    document.getElementById("consulta/emprestimo/selecionar_codigo").addEventListener("change", function() {
        toggleCampo('campo_emprestimo_codigo', 'consulta/emprestimo/selecionar_codigo');
    });

   
 
    });