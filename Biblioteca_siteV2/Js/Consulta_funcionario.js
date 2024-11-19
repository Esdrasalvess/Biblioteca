document.addEventListener('DOMContentLoaded', function () {
    // Filtros e visibilidade
    const checkboxFiltroNome = document.getElementById('consulta/funcionario/selecionar_nome');
    const checkboxFiltroCargo= document.getElementById('consulta/funcionario/selecionar_cargo');
    const checkboxFiltroId = document.getElementById('consulta/funcionario/selecionar_id');
  

    const checkboxVisibilidadeNome = document.getElementById('consulta/funcionario/visibilidade_nome');
    const checkboxVisibilidadeCargo = document.getElementById('consulta/funcionario/visibilidade_cargo');
    const checkboxVisibilidadeId = document.getElementById('consulta/funcionario/visibilidade_id');

    const campoNome = document.getElementById('campo_funcionario_nome');
    const campoCargo = document.getElementById('campo_funcionario_cargo');
    const campoId = document.getElementById('campo_funcionario_id');
   

    // Mostrar/ocultar campos de entrada com base nos filtros selecionados
    checkboxFiltroNome.addEventListener('change', () => campoNome.style.display = checkboxFiltroNome.checked ? 'inline' : 'none');
    checkboxFiltroCargo.addEventListener('change', () => campoCargo.style.display = checkboxFiltroCargo.checked ? 'inline' : 'none');
    checkboxFiltroId.addEventListener('change', () => campoId.style.display = checkboxFiltroId.checked ? 'inline' : 'none');
   
});


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
        filtros.id_funcionario = document.getElementById("pesquisa_funcionario_id").value;
    }

    console.log(filtros);

    // Construindo a URL com parâmetros de filtro
    const url = new URL("http://localhost:8080/api/funcionarios");
    if (filtros.nome) url.searchParams.append("nome", filtros.nome);
    if (filtros.cargo) url.searchParams.append("cargo", filtros.cargo);
    if (filtros.id_funcionario) url.searchParams.append("id", filtros.id_funcionario);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Erro ao consultar funcionários: !resposta.ok");

        const funcionarios = await response.json();

        // Exibir os dados na tabela
        const tbody = document.querySelector("#resultadoConsultaFuncionario tbody");
        tbody.innerHTML = ""; // Limpa os dados anteriores

        funcionarios.forEach(funcionario => {
            const tr = document.createElement("tr");

            // Visibilidade das colunas
            if (document.getElementById("consulta/funcionario/visibilidade_nome").checked) {
                const thNome = document.createElement("th");
                const tdNome = document.createElement("td");
                tdNome.textContent = funcionario.nome || "N/A";
                tr.appendChild(tdNome);
                tr.appendChild(thNome);
            }
            if (document.getElementById("consulta/funcionario/visibilidade_cargo").checked) {
                const tdCargo = document.createElement("td");
                const thCargo = document.createElement("th");
                tdCargo.textContent = funcionario.cargo || "N/A";
                tr.appendChild(tdCargo);
                tr.appendChild(thCargo);
            }
            if (document.getElementById("consulta/funcionario/visibilidade_id").checked) {
                const tdId = document.createElement("td");
                const thId = document.createElement("th");
                tdId.textContent = funcionario.id_funcionario || "N/A";
                tr.appendChild(tdId);
                tr.appendChild(thId);
            }

            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
        alert("Ocorreu um erro ao buscar os dados dos funcionários.");
    }
});
