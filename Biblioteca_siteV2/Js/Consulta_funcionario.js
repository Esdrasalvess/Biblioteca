document.addEventListener('DOMContentLoaded', function () {

    //Variáveis funcionário 
    const checkboxFiltroNome = document.getElementById('consulta/funcionario/selecionar_nome');
    const checkboxFiltroCargo = document.getElementById('consulta/funcionario/selecionar_cargo');
    const checkboxFiltroId = document.getElementById('consulta/funcionario/selecionar_id');

    const checkboxVisibilidadeNome = document.getElementById('consulta/funcionario/visibilidade_nome');
    const checkboxVisibilidadeCargo = document.getElementById('consulta/funcionario/visibilidade_cargo');
    const checkboxVisibilidadeId = document.getElementById('consulta/funcionario/visibilidade_id');

   
    const campoNome = document.getElementById('campo_funcionario_nome');
    const campoCargo = document.getElementById('campo_funcionario_cargo');
    const campoId = document.getElementById('campo_funcionario_id');


    //Display caixas de texto ao clicar checkbox - Funcionário
    checkboxFiltroNome.addEventListener('change', () => campoNome.style.display = checkboxFiltroNome.checked ? 'inline' : 'none');
    checkboxFiltroCargo.addEventListener('change', () => campoCargo.style.display = checkboxFiltroCargo.checked ? 'inline' : 'none');
    checkboxFiltroId.addEventListener('change', () => campoId.style.display = checkboxFiltroId.checked ? 'inline' : 'none');
    
    // Formulário de consulta
    document.getElementById('formConsultaAutor').addEventListener('submit', function (event) {
        event.preventDefault();

        // Captura os valores de pesquisa
        const nome = checkboxFiltroNome.checked ? document.getElementById('pesquisa_funcionario_nome').value : '';
        const cargo = checkboxFiltroCargo.checked ? document.getElementById('pesquisa_funcionario_cargo').value : '';
        const id = checkboxFiltroId.checked ? document.getElementById('pesquisa_funcionario_id').value : '';
      

        // Realiza a consulta na API, incluindo os filtros como parâmetros de consulta
        const url = `URL_DA_API_DE_AUTORES?nome=${nome}&cargo=${cargo}&id=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const tbody = document.getElementById('resultadoConsulta').querySelector('tbody');
                tbody.innerHTML = ''; // Limpa os resultados anteriores

                data.forEach(funcionario => {
                    const row = document.createElement('tr');

                    // Verifica as opções de visibilidade antes de adicionar as colunas
                    if (checkboxVisibilidadeId.checked) {
                        const idCell = document.createElement('td');
                        idCell.textContent = funcionario.id_funcionario;
                        row.appendChild(idCell);
                    }

                    if (checkboxVisibilidadeNome.checked) {
                        const nomeCell = document.createElement('td');
                        nomeCell.textContent = funcionario.nome;
                        row.appendChild(nomeCell);
                    }

                    if (checkboxVisibilidadeCargo.checked) {
                        const cargoCell = document.createElement('td');
                        cargoCell.textContent = funcionario.cargo;
                        row.appendChild(cargoCell);
                    }

                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Erro ao buscar dados dos funcionarios:', error));
    });
});