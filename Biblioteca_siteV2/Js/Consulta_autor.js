 document.addEventListener('DOMContentLoaded', function () {
    // Filtros e visibilidade
    const checkboxFiltroNome = document.getElementById('consulta/autor/selecionar_nome');
    const checkboxFiltroNacionalidade = document.getElementById('consulta/autor/selecionar_nacionalidade');
    const checkboxFiltroId = document.getElementById('consulta/autor/selecionar_id');
    const checkboxFiltroQtdLivros = document.getElementById('consulta/autor/selecionar_qtd_livros');

    const checkboxVisibilidadeNome = document.getElementById('consulta/autor/visibilidade_nome');
    const checkboxVisibilidadeCargo = document.getElementById('consulta/autor/visibilidade_cargo');
    const checkboxVisibilidadeId = document.getElementById('consulta/autor/visibilidade_id');

    const campoNome = document.getElementById('campo_autor_nome');
    const campoNacionalidade = document.getElementById('campo_autor_nacionalidade');
    const campoId = document.getElementById('campo_autor_id');
    const campoQtdLivros = document.getElementById('campo_autor_qtd_livros');

    
    const pesquisaNome = document.getElementById('pesquisa_autor_nome');
    const pesquisaNacionalidade = document.getElementById('pesquisa_autor_nacionalidade');
    const pesquisaId = document.getElementById('pesquisa_autor_id');


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

    if (checkboxFiltroNome.checked) {
        filtros.nome = pesquisaNome.value;
    }
    if (checkboxFiltroNacionalidade.checked) {
        filtros.nacionalidade = pesquisaNacionalidade.value;
    }
    if (checkboxFiltroId.checked) {
        const id = pesquisaId.value;
        if (!isNaN(id)) filtros.id_autor = id;
    }

    console.log(filtros);

    const url = new URL("http://localhost:8080/api/autores");
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

        if (!response.ok) throw new Error("Erro ao consultar autores: !resposta.ok");

        const autores = await response.json();
        const tbody = document.querySelector("#resultadoConsultaAutor tbody");
        const thead = document.querySelector("#resultadoConsultaAutor thead");
        tbody.innerHTML = ""; // Limpa os dados anteriores
        const headerRow = document.querySelector("#headerRowAutor");
        headerRow.innerHTML = ""; // Limpa os títulos anteriores


        if (checkboxVisibilidadeNome.checked) {
            const thNome = document.createElement("th");
            thNome.textContent = "Nome";
            headerRow.appendChild(thNome);
        }
        if (checkboxVisibilidadeNacionalidade.checked) {
            const thNacionalidade = document.createElement("th");
            thNacionalidade.textContent = "Nacionalidade";
            headerRow.appendChild(thNacionalidade);
        }
        if (checkboxVisibilidadeId.checked) {
            const thId = document.createElement("th");
            thId.textContent = "ID";
            headerRow.appendChild(thId);
        }

        if (autores.length === 0) {
            tbody.innerHTML = "<tr><td colspan='4'>Nenhum autor encontrado.</td></tr>";
            return;
        }



        autores.forEach(autor => {
            const tr = document.createElement("tr");

            if (checkboxVisibilidadeNome.checked) {
                const tdNome = document.createElement("td");
                tdNome.textContent = autor.nome || "N/A";
                tr.appendChild(tdNome);
            }
            if (checkboxVisibilidadeNacionalidade.checked) {
                const tdNacionalidade = document.createElement("td");
                tdNacionalidade.textContent = autor.nacionalidade || "N/A";
                tr.appendChild(tdNacionalidade);
            }
            if (checkboxVisibilidadeId.checked) {
                const tdId = document.createElement("td");
                tdId.textContent = autor.id_autor || "N/A";
                tr.appendChild(tdId);
            }

            tbody.appendChild(tr);
        });
        
    } catch (error) {
        console.error("Erro ao buscar autores:", error);    
        alert("Ocorreu um erro ao buscar os dados dos autores. Tente novamente.");
    }
});
