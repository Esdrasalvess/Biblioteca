const checkboxFiltroNome = document.getElementById('consulta/autor/selecionar_nome');
const checkboxFiltroNacionalidade = document.getElementById('consulta/autor/selecionar_nacionalidade');
const checkboxFiltroId = document.getElementById('consulta/autor/selecionar_id');
const checkboxFiltroQtdLivros = document.getElementById('consulta/autor/selecionar_qtd_livros');

const campoNome = document.getElementById('campo_autor_nome');
const campoNacionalidade = document.getElementById('campo_autor_nacionalidade');
const campoId = document.getElementById('campo_autor_id');
const campoQtdLivros = document.getElementById('campo_autor_qtd_livros');

document.addEventListener('DOMContentLoaded', function () {
    // Mostrar/ocultar campos de entrada com base nos filtros selecionados
    checkboxFiltroNome.addEventListener('change', () => campoNome.style.display = checkboxFiltroNome.checked ? 'inline' : 'none');
    checkboxFiltroNacionalidade.addEventListener('change', () => campoNacionalidade.style.display = checkboxFiltroNacionalidade.checked ? 'inline' : 'none');
    checkboxFiltroId.addEventListener('change', () => campoId.style.display = checkboxFiltroId.checked ? 'inline' : 'none');
    checkboxFiltroQtdLivros.addEventListener('change', () => campoQtdLivros.style.display = checkboxFiltroQtdLivros.checked ? 'inline' : 'none');
});

const checkboxVisibilidadeNome = document.getElementById('consulta/autor/visibilidade_nome');
const checkboxVisibilidadeNacionalidade = document.getElementById('consulta/autor/visibilidade_nacionalidade');
const checkboxVisibilidadeId = document.getElementById('consulta/autor/visibilidade_id');
const checkboxVisibilidadeQtdLivros = document.getElementById('consulta/autor/visibilidade_qtd_livros');

const pesquisaNome = document.getElementById('pesquisa_autor_nome');
const pesquisaNacionalidade = document.getElementById('pesquisa_autor_nacionalidade');
const pesquisaId = document.getElementById('pesquisa_autor_id');
const pesquisaQtdLivros = document.getElementById('pesquisa_autor_qtd_livros');

const FormConsulta = document.getElementById("formConsultaAutor");

FormConsulta.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Inicializando os filtros e o endpoint base
    let endpoint = "http://localhost:8080/api/autores";
    const filtros = {};

    // Verificar qual filtro foi selecionado
    switch (true) {
        case checkboxFiltroNome.checked && pesquisaNome.value.trim() !== "":
            filtros.nome = pesquisaNome.value.trim();
            endpoint += "/buscar";
            break;

        case checkboxFiltroNacionalidade.checked && pesquisaNacionalidade.value.trim() !== "":
            filtros.nacionalidade = pesquisaNacionalidade.value.trim();
            endpoint += "/buscarPorNacionalidade";
            break;

        case checkboxFiltroId.checked && pesquisaId.value.trim() !== "":
            const id = pesquisaId.value.trim();
            if (!isNaN(id)) {
                filtros.id_autor = id;
                endpoint = `http://localhost:8080/api/autores/${id}`;
            }
            break;

        case checkboxFiltroQtdLivros.checked && pesquisaQtdLivros.value.trim() !== "":
            filtros.qtd_livros = pesquisaQtdLivros.value.trim();
            endpoint += "/buscarPorQtdLivros";
            break;

        default:
            alert("Nenhum filtro válido foi selecionado ou preenchido.");
            return;
    }

    // Adiciona os filtros como parâmetros da URL
    const url = new URL(endpoint);
    Object.entries(filtros).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    console.log("URL gerada:", url.toString()); // Verifica a URL final

    // Realiza a busca e renderiza os resultados
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) throw new Error("Erro ao consultar autores.");

        const autores = await response.json();
        renderTabelaAutores(autores);
    } catch (error) {
        console.error("Erro ao buscar autores:", error);
        alert("Ocorreu um erro ao buscar os dados dos autores. Tente novamente.");
    }
});

// Função para renderizar a tabela de autores
function renderTabelaAutores(autores) {
    const tbody = document.querySelector("#resultadoConsultaAutor tbody");
    const headerRow = document.querySelector("#headerRowAutor");
    tbody.innerHTML = ""; // Limpa os dados anteriores
    headerRow.innerHTML = ""; // Limpa os cabeçalhos anteriores

    // Adiciona os cabeçalhos dinamicamente com base na visibilidade
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

    // Adiciona os dados na tabela
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
}
