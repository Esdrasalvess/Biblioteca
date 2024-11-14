document.addEventListener('DOMContentLoaded', function () {

    //Variáveis funcionário 
    const checkboxFiltroNomeFuncionario = document.getElementById('consulta/funcionario/selecionar_nome');
    const checkboxFiltroCargoFuncionario = document.getElementById('consulta/funcionario/selecionar_cargo');
    const checkboxFiltroIdFuncionario= document.getElementById('consulta/funcionario/selecionar_id');

    const checkboxVisibilidadeNomeFuncionario = document.getElementById('consulta/funcionario/visibilidade_nome');
    const checkboxVisibilidadeCargoFuncionario = document.getElementById('consulta/funcionario/visibilidade_cargo');
    const checkboxVisibilidadeIdFuncionario = document.getElementById('consulta/funcionario/visibilidade_id');

    const campoQtdLivrosAutor = document.getElementById('campo_autor_qtd_livros');
    const campoNomeFuncionario = document.getElementById('campo_funcionario_nome');
    const campoCargoFuncionario = document.getElementById('campo_funcionario_cargo');
    const campoIdFuncionario = document.getElementById('campo_funcionario_id');

   //Variáveis autor 
    const checkboxFiltroNomeAutor = document.getElementById('consulta/autor/selecionar_nome');
    const checkboxFiltroNacionalidadeAutor = document.getElementById('consulta/autor/selecionar_nacionalidade');
    const checkboxFiltroIdAutor = document.getElementById('consulta/autor/selecionar_id');
    const checkboxFiltroQtdLivrosAutor = document.getElementById('consulta/autor/selecionar_qtd_livros');

    const checkboxVisibilidadeNomeAutor = document.getElementById('consulta/autor/visibilidade_nome');
    const checkboxVisibilidadeNacionalidadeAutor = document.getElementById('consulta/autor/visibilidade_nacionalidade');
    const checkboxVisibilidadeIdAutor = document.getElementById('consulta/autor/visibilidade_id');

    const campoNomeAutor = document.getElementById('campo_autor_nome');
    const campoNacionalidadeAutor = document.getElementById('campo_autor_nacionalidade');
    const campoIdAutor = document.getElementById('campo_autor_id');  

    //Display caixas de texto ao clicar checkbox - Funcionário
    checkboxFiltroNomeFuncionario.addEventListener('change', () => campoNomeFuncionario.style.display = checkboxFiltroNomeFuncionario.checked ? 'inline' : 'none');
    checkboxFiltroCargoFuncionario.addEventListener('change', () => campoCargoFuncionario.style.display = checkboxFiltroCargoFuncionario.checked ? 'inline' : 'none');
    checkboxFiltroIdFuncionario.addEventListener('change', () => campoIdFuncionario.style.display = checkboxFiltroIdFuncionario.checked ? 'inline' : 'none');


    // Display caixas de texto ao clicar checkbox - Autor
    checkboxFiltroNomeAutor.addEventListener('change', () => campoNomeAutor.style.display = checkboxFiltroNomeAutor.checked ? 'block' : 'none');
    checkboxFiltroNacionalidade.addEventListener('change', () => campoNacionalidadeAutor.style.display = checkboxFiltroNacionalidadeAutor.checked ? 'block' : 'none');
    checkboxFiltroId.addEventListener('change', () => campoIdAutor.style.display = checkboxFiltroIdAutor.checked ? 'block' : 'none');
    checkboxFiltroQtdLivros.addEventListener('change', () => campoQtdLivrosAutor.style.display = checkboxFiltroQtdLivrosAutor.checked ? 'block' : 'none');
    
});