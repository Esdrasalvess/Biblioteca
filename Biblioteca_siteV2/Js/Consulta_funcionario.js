document.addEventListener('DOMContentLoaded', function () {

    const FormConsulta = document.getElementById("FormConsultaFuncionario");

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
   
    const pesquisaNome = document.getElementById('pesquisa_funcionario_nome');
    const pesquisaCargo = document.getElementById('pesquisa_funcionario_cargo');
    const pesquisaId = document.getElementById('pesquisa_funcionario_id');

    // Mostrar/ocultar campos de entrada com base nos filtros selecionados
    checkboxFiltroNome.addEventListener('change', () => campoNome.style.display = checkboxFiltroNome.checked ? 'inline' : 'none');
    checkboxFiltroCargo.addEventListener('change', () => campoCargo.style.display = checkboxFiltroCargo.checked ? 'inline' : 'none');
    checkboxFiltroId.addEventListener('change', () => campoId.style.display = checkboxFiltroId.checked ? 'inline' : 'none');
   
});


FormConsulta.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Definindo filtros de pesquisa conforme os checkboxes selecionados
    const filtros = {};

    if (checkboxVisibilidadeNome.checked) {
        filtros.nome = pesquisaNome.value;
    }
    if (checkboxVisibilidadeCargo.checked) {
        filtros.cargo = pesquisaCargo.value;
    }
    if (checkboxVisibilidadeId.checked) {
        filtros.id_funcionario = pesquisaId.value;
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
        const thead = document.querySelector("#resultadoConsultaFuncionario thead");
        tbody.innerHTML = ""; // Limpa os dados anteriores
        const headerRow = document.querySelector("#headerRowFuncionario");
        headerRow.innerHTML = ""; // Limpa os títulos anteriores



        // Adicionando os títulos das colunas no cabeçalho (thead)
        if (checkboxVisibilidadeNome.checked) {
            const thNome = document.createElement("th");
            thNome.textContent = "Nome";
            headerRow.appendChild(thNome);
        }
        if (checkboxVisibilidadeCargo.checked) {
            const thCargo = document.createElement("th");
            thCargo.textContent = "Cargo";
            headerRow.appendChild(thCargo);
        }
        if (checkboxVisibilidadeId.checked) {
            const thId = document.createElement("th");
            thId.textContent = "ID";
            headerRow.appendChild(thId);
        }

        if (funcionarios.length === 0) {
            tbody.innerHTML = "<tr><td colspan='3'>Nenhum funcionário encontrado.</td></tr>";
            return;
        }


        
        // Adicionando os dados na tabela
        funcionarios.forEach(funcionario => {
            const tr = document.createElement("tr");

            if (checkboxVisibilidadeNome.checked) {
                const tdNome = document.createElement("td");
                tdNome.textContent = funcionario.nome || "N/A";
                tr.appendChild(tdNome);
            }
            if (checkboxVisibilidadeCargo.checked) {
                const tdCargo = document.createElement("td");
                tdCargo.textContent = funcionario.cargo || "N/A";
                tr.appendChild(tdCargo);
            }
            if (checkboxVisibilidadeId.checked) {
                const tdId = document.createElement("td");
                tdId.textContent = funcionario.id_funcionario || "N/A";
                tr.appendChild(tdId);
            }

            tbody.appendChild(tr);
        });

    } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
        alert("Ocorreu um erro ao buscar os dados dos funcionários.");
    }
});

