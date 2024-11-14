function permitirApenasNumeros(input) {
    input.value = input.value.replace(/\D/g, '');
}

const apiUrl = 'http://localhost:3000/api/autores';

// Função para carregar autores no select
function carregarAutores() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar autores');
            }
            return response.json();
        })
        .then(autores => {
            const selectAutor = document.getElementById('autor');

            // Limpar o select (caso já tenha opções)
            selectAutor.innerHTML = '<option value="" disabled selected>Selecione um autor</option>';

            // Adicionar cada autor ao select
            autores.forEach(autor => {
                const option = document.createElement('option');
                option.value = autor.id_autor;
                option.textContent = autor.nome;
                selectAutor.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

// Chama a função para carregar os autores ao carregar a página
carregarAutores();
