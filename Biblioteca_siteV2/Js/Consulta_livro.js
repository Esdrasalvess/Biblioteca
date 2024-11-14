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
