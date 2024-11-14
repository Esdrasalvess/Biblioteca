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

    // Formulário de consulta
    document.getElementById('formConsultaAutor').addEventListener('submit', function (event) {
        event.preventDefault();

        // Captura os valores de pesquisa
        const nome = checkboxFiltroNome.checked ? document.getElementById('pesquisa_autor_nome').value : '';
        const nacionalidade = checkboxFiltroNacionalidade.checked ? document.getElementById('pesquisa_autor_nacionalidade').value : '';
        const id = checkboxFiltroId.checked ? document.getElementById('pesquisa_autor_id').value : '';
        const qtdLivros = checkboxFiltroQtdLivros.checked ? document.getElementById('pesquisa_autor_qtd_livros').value : '';

        // Realiza a consulta na API, incluindo os filtros como parâmetros de consulta
        const url = `URL_DA_API_DE_AUTORES?nome=${nome}&nacionalidade=${nacionalidade}&id=${id}&qtdLivros=${qtdLivros}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const tbody = document.getElementById('resultadoConsulta').querySelector('tbody');
                tbody.innerHTML = ''; // Limpa os resultados anteriores

                data.forEach(autor => {
                    const row = document.createElement('tr');

                    // Verifica as opções de visibilidade antes de adicionar as colunas
                    if (checkboxVisibilidadeId.checked) {
                        const idCell = document.createElement('td');
                        idCell.textContent = autor.id_autor;
                        row.appendChild(idCell);
                    }

                    if (checkboxVisibilidadeNome.checked) {
                        const nomeCell = document.createElement('td');
                        nomeCell.textContent = autor.nome;
                        row.appendChild(nomeCell);
                    }

                    if (checkboxVisibilidadeNacionalidade.checked) {
                        const nacionalidadeCell = document.createElement('td');
                        nacionalidadeCell.textContent = autor.nacionalidade;
                        row.appendChild(nacionalidadeCell);
                    }

                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Erro ao buscar dados dos autores:', error));
    });
});
