document.addEventListener('DOMContentLoaded', function () {
    // Filtros e visibilidade
    const checkboxFiltroLeitor = document.getElementById('consulta/emprestimo/selecionar_leitor');
    const checkboxFiltroFuncionarioResponsavel = document.getElementById('consulta/emprestimo/selecionar_funcionario_responsavel');
    const checkboxFiltroLivro = document.getElementById('consulta/emprestimo/selecionar_livro');
    const checkboxFiltroData = document.getElementById('consulta/emprestimo/selecionar_data');
    const checkboxFiltroCodigo = document.getElementById('consulta/emprestimo/selecionar_codigo');

    const checkboxVisibilidadeLeitor = document.getElementById('consulta/emprestimo/visibilidade_leitor');
    const checkboxVisibilidadeFuncionarioResponsavel = document.getElementById('consulta/emprestimo/visibilidade_funcionario_responsável');
    const checkboxVisibilidadeLivro = document.getElementById('consulta/emprestimo/visibilidade_livro');
    const checkboxVisibilidadeData = document.getElementById('consulta/emprestimo/visibilidade_data');
    const checkboxVisibilidadeCodigo = document.getElementById('consulta/emprestimo/visibilidade_codigo');


    const campoLeitor = document.getElementById('campo_emprestimo_leitor');
    const campoFuncionarioResponsavel = document.getElementById('campo_emprestimo_funcionario_responsavel');
    const campoLivro = document.getElementById('campo_emprestimo_livro');
    const campoDataInicial = document.getElementById('campo_emprestimo_data_inicial');
    const campoDataFinal = document.getElementById('campo_emprestimo_data_final');
    const campoCodigo = document.getElementById('campo_emprestimo_codigo');

    // Mostrar/ocultar campos de entrada com base nos filtros selecionados
    checkboxFiltroLeitor.addEventListener('change', () => campoLeitor.style.display = checkboxFiltroLeitor.checked ? 'inline' : 'none');
    checkboxFiltroFuncionarioResponsavel.addEventListener('change', () => campoFuncionarioResponsavel.style.display = checkboxFiltroFuncionarioResponsavel.checked ? 'inline' : 'none');
    checkboxFiltroLivro.addEventListener('change', () => campoLivro.style.display = checkboxFiltroLivro.checked ? 'inline' : 'none');
    checkboxFiltroData.addEventListener('change', () => campoDataInicial.style.display = checkboxFiltroData.checked ? 'inline' : 'none');
    checkboxFiltroData.addEventListener('change', () => campoDataFinal.style.display = checkboxFiltroData.checked ? 'inline' : 'none');
    checkboxFiltroCodigo.addEventListener('change', () => campoCodigo.style.display = checkboxFiltroCodigo.checked ? 'inline' : 'none');
});
