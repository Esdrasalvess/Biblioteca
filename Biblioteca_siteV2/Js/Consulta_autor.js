document.addEventListener('DOMContentLoaded', function () {
    // Filtros e visibilidade
    const checkboxFiltroNome = document.getElementById('consulta/autor/selecionar_nome');
    const checkboxFiltroNacionalidade = document.getElementById('consulta/autor/selecionar_nacionalidade');
    const checkboxFiltroId = document.getElementById('consulta/autor/selecionar_id');
    const checkboxFiltroQtdLivros = document.getElementById('consulta/autor/selecionar_qtd_livros');

    const checkboxVisibilidadeNome = document.getElementById('consulta/autor/visibilidade_nome');
    const checkboxVisibilidadeNacionalidade = document.getElementById('consulta/autor/visibilidade_nacionalidade');
    const checkboxVisibilidadeId = document.getElementById('consulta/autor/visibilidade_id');

    const campoNome = document.getElementById('campo_autor_nome');
    const campoNacionalidade = document.getElementById('campo_autor_nacionalidade');
    const campoId = document.getElementById('campo_autor_id');
    const campoQtdLivros = document.getElementById('campo_autor_qtd_livros');

    // Mostrar/ocultar campos de entrada com base nos filtros selecionados
    checkboxFiltroNome.addEventListener('change', () => campoNome.style.display = checkboxFiltroNome.checked ? 'inline' : 'none');
    checkboxFiltroNacionalidade.addEventListener('change', () => campoNacionalidade.style.display = checkboxFiltroNacionalidade.checked ? 'inline' : 'none');
    checkboxFiltroId.addEventListener('change', () => campoId.style.display = checkboxFiltroId.checked ? 'inline' : 'none');
    checkboxFiltroQtdLivros.addEventListener('change', () => campoQtdLivros.style.display = checkboxFiltroQtdLivros.checked ? 'inline' : 'none');

});

document.getElementById("formConsultaAutor").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Definindo filtros de pesquisa conforme os checkboxes selecionados
    const filtros = {};

    if (document.getElementById("consulta/autor/selecionar_nome").checked) {
        filtros.nome = document.getElementById("pesquisa_autor_nome").value;
    }
    if (document.getElementById("consulta/autor/selecionar_nacionalidade").checked) {
        filtros.cargo = document.getElementById("pesquisa_autor_nacionalidade").value;
    }
    if (document.getElementById("consulta/autor/selecionar_id").checked) {
        filtros.id_autor = document.getElementById("pesquisa_autor_id").value;
    }

    console.log(filtros);

    // Construindo a URL com parâmetros de filtro
    const url = new URL("http://localhost:8080/api/funcionarios");
    if (filtros.nome) url.searchParams.append("nome", filtros.nome);
    if (filtros.nacionalidade) url.searchParams.append("nacionalidade", filtros.nacionalidade);
    if (filtros.id_autor) url.searchParams.append("id", filtros.id_autor);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Erro ao consultar funcionários");

        const funcionarios = await response.json();

        // Exibir os dados na tabela
        const tbody = document.querySelector("#resultadoConsulta tbody");
        tbody.innerHTML = ""; // Limpa os dados anteriores

        funcionarios.forEach(funcionario => {
            const tr = document.createElement("tr");

            // Visibilidade das colunas
            if (document.getElementById("consulta/autor/visibilidade_nome").checked) {
                const tdNome = document.createElement("td");
                tdNome.textContent = autor.nome || "N/A";
                tr.appendChild(tdNome);
            }
            if (document.getElementById("consulta/autor/visibilidade_cargo").checked) {
                const tdCargo = document.createElement("td");
                tdCargo.textContent = autor.cargo || "N/A";
                tr.appendChild(tdCargo);
            }
            if (document.getElementById("consulta/autor/visibilidade_id").checked) {
                const tdId = document.createElement("td");
                tdId.textContent = autor.id_autor || "N/A";
                tr.appendChild(tdId);
            }

            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
        alert("Ocorreu um erro ao buscar os dados dos funcionários.");
    }
});
