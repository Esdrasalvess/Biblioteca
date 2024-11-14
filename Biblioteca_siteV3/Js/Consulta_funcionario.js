document.addEventListener("DOMContentLoaded", function() {
    
    function toggleCampo(id, checkboxId) {
        const campo = document.getElementById(id);
        const checkbox = document.getElementById(checkboxId);
        campo.style.display = checkbox.checked ? 'inline' : 'none';
    }

    document.getElementById("consulta/funcionario/selecionar_nome").addEventListener("change", function() {
        toggleCampo('campo_funcionario_nome', 'consulta/funcionario/selecionar_nome');
    });

    document.getElementById("consulta/funcionario/selecionar_cargo").addEventListener("change", function() {
        toggleCampo('campo_funcionario_cargo', 'consulta/funcionario/selecionar_cargo');
    });

    document.getElementById("consulta/funcionario/selecionar_id").addEventListener("change", function() {
        toggleCampo('campo_funcionario_id', 'consulta/funcionario/selecionar_id');
    });



    document.getElementById("formConsultaFuncionario").addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("pesquisa_funcionario_nome").value;
        const cargo = document.getElementById("pesquisa_funcionario_cargo").value;
        const codigo = document.getElementById("pesquisa_funcionario_codigo").value;

        const params = new URLSearchParams();
        if (nome) params.append("nome", nome);
        if (cargo) params.append("cargo", cargo);
        if (codigo) params.append("codigo", codigo);

        fetch(`/api/funcionarios?${params.toString()}`)
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector("#resultadoConsulta tbody");
                tbody.innerHTML = ''; 
                data.forEach(funcionario => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${funcionario.nome}</td>
                        <td>${funcionario.cargo}</td>
                        <td>${funcionario.codigo}</td>
                    `;
                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error("Erro ao consultar funcionários:", error));
    });
});
