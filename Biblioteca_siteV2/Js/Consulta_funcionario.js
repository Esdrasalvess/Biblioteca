document.getElementById("formConsultaFuncionario").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Definindo filtros de pesquisa conforme os checkboxes selecionados
    const filtros = {};
    if (document.getElementById("consulta/funcionario/selecionar_nome").checked) {
        filtros.nome = document.getElementById("pesquisa_funcionario_nome").value;
    }
    if (document.getElementById("consulta/funcionario/selecionar_cargo").checked) {
        filtros.cargo = document.getElementById("pesquisa_funcionario_cargo").value;
    }
    if (document.getElementById("consulta/funcionario/selecionar_id").checked) {
        filtros.id_funcionario = document.getElementById("pesquisa_funcionario_id").value; // Atualizado para 'id_funcionario'
    }

    try {
        const response = await fetch("http://localhost:8080/api/funcionarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filtros)
        });
        
        if (!response.ok) throw new Error("Erro ao consultar funcionários");

        const funcionarios = await response.json();
        
        // Exibir os dados na tabela
        const tbody = document.querySelector("#resultadoConsulta tbody");
        tbody.innerHTML = ""; // Limpa os dados anteriores
        
        funcionarios.forEach(funcionario => {
            const tr = document.createElement("tr");

            // Visibilidade das colunas
            if (document.getElementById("consulta/funcionario/visibilidade_nome").checked) {
                const tdNome = document.createElement("td");
                tdNome.textContent = funcionario.nome || "N/A";
                tr.appendChild(tdNome);
            }
            if (document.getElementById("consulta/funcionario/visibilidade_cargo").checked) {
                const tdCargo = document.createElement("td");
                tdCargo.textContent = funcionario.cargo || "N/A";
                tr.appendChild(tdCargo);
            }
            if (document.getElementById("consulta/funcionario/visibilidade_id").checked) {
                const tdId = document.createElement("td");
                tdId.textContent = funcionario.id_funcionario || "N/A";  // Acesso ao 'id_funcionario'
                tr.appendChild(tdId);
            }

            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
        alert("Ocorreu um erro ao buscar os dados dos funcionários.");
    }
});
