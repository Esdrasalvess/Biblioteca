const checkboxFiltroTitulo = document.getElementById('consulta/livro/selecionar_titulo');
const checkboxFiltroAutor = document.getElementById('consulta/livro/selecionar_autor');
const checkboxFiltroAno = document.getElementById('consulta/livro/selecionar_ano');
const checkboxFiltroId = document.getElementById('consulta/livro/selecionar_id');
const checkboxFiltroDisponivel = document.getElementById('consulta/livro/selecionar_disponivel');

const checkboxVisibilidadeTitulo = document.getElementById('consulta/livro/visibilidade_titulo');
const checkboxVisibilidadeAutor = document.getElementById('consulta/livro/visibilidade_autor');
const checkboxVisibilidadeAno = document.getElementById('consulta/livro/visibilidade_ano');
const checkboxVisibilidadeId = document.getElementById('consulta/livro/visibilidade_id');
const checkboxVisibilidadeDisponivel = document.getElementById('consulta/livro/visibilidade_disponivel');


const campoTitulo = document.getElementById('campo_livro_titulo');
const campoAutor = document.getElementById('campo_livro_autor');
const campoAno = document.getElementById('campo_livro_ano');
const campoId = document.getElementById('campo_livro_id');
const campoDisponivel = document.getElementById('campo_livro_disponivel');

const pesquisaTitulo = document.getElementById('pesquisa_livro_titulo');
const pesquisaAutor = document.getElementById('pesquisa_livro_autor');
const pesquisaAno = document.getElementById('pesquisa_livro_ano');
const pesquisaId = document.getElementById('pesquisa_livro_id');
const pesquisaDisponivel = document.getElementById('pesquisa_livro_disponivel');

document.addEventListener('DOMContentLoaded', function () {
    
    // Mostrar/ocultar campos de entrada com base nos filtros selecionados
    checkboxFiltroTitulo.addEventListener('change', () => campoTitulo.style.display = checkboxFiltroTitulo.checked ? 'inline' : 'none');
    checkboxFiltroAutor.addEventListener('change', () => campoAutor.style.display = checkboxFiltroAutor.checked ? 'inline' : 'none');
    checkboxFiltroAno.addEventListener('change', () => campoAno.style.display = checkboxFiltroAno.checked ? 'inline' : 'none');
    checkboxFiltroId.addEventListener('change', () => campoId.style.display = checkboxFiltroId.checked ? 'inline' : 'none');
    checkboxFiltroDisponivel.addEventListener('change', () => campoDisponivel.style.display = checkboxFiltroDisponivel.checked ? 'inline' : 'none');
});

const FormConsulta = document.getElementById("FormConsultaLivro");

FormConsulta.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Definindo filtros de pesquisa conforme os checkboxes selecionados
    const filtros = {};

    if (checkboxVisibilidadeTitulo.checked) {
        filtros.titulo = pesquisaTitulo.value;
    }
    if (checkboxVisibilidadeAutor.checked) {
        filtros.autor = pesquisaAutor.value;
    }
    if (checkboxVisibilidadeAno.checked) {
        filtros.ano = pesquisaAno.value;
    }
    if (checkboxVisibilidadeId.checked) {
        filtros.id_livro = pesquisaId.value;
    }
    if (checkboxVisibilidadeDisponivel.checked) {
        filtros.disponivel = pesquisaDisponivel.value;
    }

    console.log(filtros);

    // Construindo a URL com parâmetros de filtro
    const url = new URL("http://localhost:8080/api/livros");
    if (filtros.titulo) url.searchParams.append("titulo", filtros.titulo);
    if (filtros.autor) url.searchParams.append("autor", filtros.autor);
    if (filtros.ano) url.searchParams.append("ano", filtros.ano);
    if (filtros.id_livro) url.searchParams.append("id", filtros.id_livro);
    if (filtros.disponivel) url.searchParams.append("disponivel", filtros.disponivel);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Erro ao consultar livros: !resposta.ok");

        const funcionarios = await response.json();

        // Exibir os dados na tabela
        const tbody = document.querySelector("#resultadoConsultaLivro tbody");
        const thead = document.querySelector("#resultadoConsultaLivro thead");
        tbody.innerHTML = ""; // Limpa os dados anteriores
        const headerRow = document.querySelector("#headerRowLivro");
        headerRow.innerHTML = ""; // Limpa os títulos anteriores



        // Adicionando os títulos das colunas no cabeçalho (thead)
        if (checkboxVisibilidadeTitulo.checked) {
            const thTitulo = document.createElement("th");
            thTitulo.textContent = "Titulo";
            headerRow.appendChild(thTitulo);
        }
        if (checkboxVisibilidadeAutor.checked) {
            const thAutor = document.createElement("th");
            thAutor.textContent = "Autor";
            headerRow.appendChild(thAutor);
        }
        if (checkboxVisibilidadeAno.checked) {
            const thAno = document.createElement("th");
            thAno.textContent = "Ano";
            headerRow.appendChild(thAno);
        }
        if (checkboxVisibilidadeId.checked) {
            const thId = document.createElement("th");
            thId.textContent = "ID";
            headerRow.appendChild(thId);
        }
        if (checkboxVisibilidadeDisponivel.checked) {
            const thDisponivel = document.createElement("th");
            thDisponivel.textContent = "Disponivel";
            headerRow.appendChild(thDisponivel);
        }

        if (livros.length === 0) {
            tbody.innerHTML = "<tr><td colspan='3'>Nenhum livro encontrado.</td></tr>";
            return;
        }


        
        // Adicionando os dados na tabela
        livros.forEach(livro => {
            const tr = document.createElement("tr");

            if (checkboxVisibilidadeTitulo.checked) {
                const tdTitulo = document.createElement("td");
                tdTitulo.textContent = livro.titulo || "N/A";
                tr.appendChild(tdTitulo);
            }
            if (checkboxVisibilidadeAutor.checked) {
                const tdAutor = document.createElement("td");
                tdAutor.textContent = livro.autor || "N/A";
                tr.appendChild(tdAutor);
            }
            
            if (checkboxVisibilidadeAno.checked) {
                const tdAno = document.createElement("td");
                tdAno.textContent = livro.ano || "N/A";
                tr.appendChild(tdAno);
            }
            if (checkboxVisibilidadeId.checked) {
                const tdId = document.createElement("td");
                tdId.textContent = livro.id_livro || "N/A";
                tr.appendChild(tdId);
            }
            if (checkboxVisibilidadeDisponivel.checked) {
                const tdDisponivel = document.createElement("td");
                tdDisponivel.textContent = livro.disponivel || "N/A";
                tr.appendChild(tdDisponivel);
            }

            tbody.appendChild(tr);
        });

    } catch (error) {
        console.error("Erro ao buscar livros:", error);
        alert("Ocorreu um erro ao buscar os dados dos livros.");
    }
});

