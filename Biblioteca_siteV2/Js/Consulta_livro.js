document.addEventListener('DOMContentLoaded', function () {
    // Filtros e visibilidade
    const checkboxFiltroTitulo = document.getElementById('consulta/livro/selecionar_titulo');
    const checkboxFiltroAutor = document.getElementById('consulta/livro/selecionar_autor');
    const checkboxFiltroAno = document.getElementById('consulta/livro/selecionar_ano');
    const checkboxFiltroCodigo = document.getElementById('consulta/livro/selecionar_codigo');
    const checkboxFiltroDisponivel = document.getElementById('consulta/livro/selecionar_disponivel');

    const checkboxVisibilidadeTitulo = document.getElementById('consulta/livro/visibilidade_titulo');
    const checkboxVisibilidadeAutor = document.getElementById('consulta/livro/visibilidade_autor');
    const checkboxVisibilidadeAno = document.getElementById('consulta/livro/visibilidade_ano');
    const checkboxVisibilidadeCodigo = document.getElementById('consulta/livro/visibilidade_codigo');
    const checkboxVisibilidadeDisponivel = document.getElementById('consulta/livro/visibilidade_disponivel');


    const campoTitulo = document.getElementById('campo_livro_titulo');
    const campoAutor = document.getElementById('campo_livro_autor');
    const campoAno = document.getElementById('campo_livro_ano');
    const campoCodigo = document.getElementById('campo_livro_codigo');
    const campoDisponivel = document.getElementById('campo_livro_disponivel');

    // Mostrar/ocultar campos de entrada com base nos filtros selecionados
    checkboxFiltroTitulo.addEventListener('change', () => campoTitulo.style.display = checkboxFiltroTitulo.checked ? 'inline' : 'none');
    checkboxFiltroAutor.addEventListener('change', () => campoAutor.style.display = checkboxFiltroAutor.checked ? 'inline' : 'none');
    checkboxFiltroAno.addEventListener('change', () => campoAno.style.display = checkboxFiltroAno.checked ? 'inline' : 'none');
    checkboxFiltroCodigo.addEventListener('change', () => campoCodigo.style.display = checkboxFiltroCodigo.checked ? 'inline' : 'none');
    checkboxFiltroDisponivel.addEventListener('change', () => campoDisponivel.style.display = checkboxFiltroDisponivel.checked ? 'inline' : 'none');
});

document.addEventListener('DOMContentLoaded', function () {
    // Filtros e visibilidade
    const checkboxFiltroNome = document.getElementById('consulta/autor/selecionar_nome');
    const checkboxFiltroNacionalidade = document.getElementById('consulta/autor/selecionar_nacionalidade');
    const checkboxFiltroId = document.getElementById('consulta/autor/selecionar_id');
    const checkboxFiltroQtdLivros = document.getElementById('consulta/autor/selecionar_qtd_livros');

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
        filtros.nacionalidade = document.getElementById("pesquisa_autor_nacionalidade").value;
    }
    if (document.getElementById("consulta/autor/selecionar_id").checked) {
        const id = document.getElementById("pesquisa_autor_id").value;
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

        if (!response.ok) throw new Error("Erro ao consultar autores.");

        const autores = await response.json();
        const tbody = document.querySelector("#resultadoConsultaAutor tbody");
        tbody.innerHTML = "";

        if (autores.length === 0) {
            tbody.innerHTML = "<tr><td colspan='3'>Nenhum autor encontrado.</td></tr>";
            return;
        }

        autores.forEach(autor => {
            const tr = document.createElement("tr");

            if (document.getElementById("consulta/autor/visibilidade_nome").checked) {
                const tdNome = document.createElement("td");
                tdNome.textContent = autor.nome || "N/A";
                tr.appendChild(tdNome);
            }
            if (document.getElementById("consulta/autor/visibilidade_nacionalidade").checked) {
                const tdNacionalidade = document.createElement("td");
                tdNacionalidade.textContent = autor.nacionalidade || "N/A";
                tr.appendChild(tdNacionalidade);
            }
            if (document.getElementById("consulta/autor/visibilidade_id").checked) {
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
