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


document.getElementById("formConsultaLivro").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Definindo filtros de pesquisa conforme os checkboxes selecionados
    const filtros = {};

    if (document.getElementById("consulta/livro/selecionar_titulo").checked) {
        filtros.titulo = document.getElementById("pesquisa_livro_titulo").value;
    }
    if (document.getElementById("consulta/livro/selecionar_autor").checked) {
        filtros.autor = document.getElementById("pesquisa_livro_autor").value;
    }
    if (document.getElementById("consulta/livro/selecionar_ano").checked) {
        filtros.ano = document.getElementById("pesquisa_livro_ano").value;
    }

    if (document.getElementById("consulta/livro/selecionar_codigo").checked) {
        filtros.id_livro = document.getElementById("pesquisa_livro_codigo").value;
    }
    
    if (document.getElementById("consulta/livro/selecionar_disponivel").checked) {
        filtros.disponivel = document.getElementById("pesquisa_livro_disponivel").value;
    }

    console.log(filtros);

    // Construindo a URL com parâmetros de filtro
    const url = new URL("http://localhost:8080/api/livros");
    if (filtros.titulo) url.searchParams.append("titulo", filtros.titulo);
    if (filtros.autor) url.searchParams.append("autor", filtros.autor);
    if (filtros.ano) url.searchParams.append("ano", filtros.ano);
    if (filtros.id_livro) url.searchParams.append("codigo", filtros.id_livro);
    if (filtros.disponivel) url.searchParams.append("disponivel", filtros.disponivel);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Erro ao consultar livros: !resposta.ok");

        const livros = await response.json();

        // Exibir os dados na tabela
        const tbody = document.querySelector("#resultadoConsultaLivro tbody");
        tbody.innerHTML = ""; // Limpa os dados anteriores

        livros.forEach(livro => {
            const tr = document.createElement("tr");

            // Visibilidade das colunas
            if (document.getElementById("consulta/livro/visibilidade_titulo").checked) {
                const tdNome = document.createElement("td");
                tdNome.textContent = livro.titulo || "N/A";
                tr.appendChild(tdNome);
            }
            if (document.getElementById("consulta/livro/visibilidade_autor").checked) {
                const tdCargo = document.createElement("td");
                tdCargo.textContent = livro.autor || "N/A";
                tr.appendChild(tdCargo);
            }
            if (document.getElementById("consulta/livro/visibilidade_ano").checked) {
                const tdId = document.createElement("td");
                tdId.textContent = livro.ano || "N/A";
                tr.appendChild(tdId);
            }
            if (document.getElementById("consulta/livro/visibilidade_codigo").checked) {
                const tdId = document.createElement("td");
                tdId.textContent = livro.id_livro || "N/A";
                tr.appendChild(tdId);
            }
            if (document.getElementById("consulta/livro/visibilidade_disponivel").checked) {
                const tdId = document.createElement("td");
                tdId.textContent = livro.disponivel || "N/A";
                tr.appendChild(tdId);
            }

            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        alert("Ocorreu um erro ao buscar os dados dos livro.");
    }
});
