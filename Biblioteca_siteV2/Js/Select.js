document.addEventListener('DOMContentLoaded', function () {
    // Função para carregar os autores no select

    function carregarAutores() {
        const selectAutor = document.getElementById("selectAutor");

        // Faz a requisição para pegar os autores
        fetch("http://localhost:8080/api/autores")
            .then(response => response.json())  // Parseia o retorno para JSON
            .then(autores => {
                // Limpa as opções anteriores (caso tenha sido carregado algo antes)
                selectAutor.innerHTML = '<option value="" disabled selected>Autor</option>';
                
                // Preenche o select com os autores
                autores.forEach(autor => {
                    const option = document.createElement("option");
                    option.value = autor.id_autor;  // Supondo que cada autor tenha um id
                    option.textContent = autor.nome;  // Nome do autor
                    selectAutor.appendChild(option);
                });
            })
            .catch(error => {
                console.error("Erro ao carregar autores:", error);
                alert("Erro ao carregar autores.");
            })
    };

    function carregarFuncionario() {
        const selectFuncionario = document.getElementById("selectFuncionario");
       
        // Faz a requisição para pegar os autores
        fetch("http://localhost:8080/api/funcionarios")
            .then(response => response.json())  // Parseia o retorno para JSON
            .then(funcionarios => {
                // Limpa as opções anteriores (caso tenha sido carregado algo antes)
                selectFuncionario.innerHTML = '<option value="" disabled selected>Funcionário responsável</option>';
                
                // Preenche o select com os autores
                funcionarios.forEach(funcionario => {
                    const option = document.createElement("option");
                    option.value = funcionario.id_funcionario;  // Supondo que cada autor tenha um id
                    option.textContent = funcionario.nome;  // Nome do autor
                    selectFuncionario.appendChild(option);
                });
            })
            .catch(error => {
                console.error("Erro ao carregar funcionários:", error);
                alert("Erro ao carregar funcionários.");
            });
    }

    function carregarLivro() {
        const selectLivro = document.getElementById("selectLivro");

        // Faz a requisição para pegar os autores
        fetch("http://localhost:8080/api/livros")
            .then(response => response.json())  // Parseia o retorno para JSON
            .then(livros => {
                // Limpa as opções anteriores (caso tenha sido carregado algo antes)
                selectLivro.innerHTML = '<option value="" disabled selected>Livro</option>';
                
                // Preenche o select com os autores
                livros.forEach(livro => {
                    const option = document.createElement("option");
                    option.value = livro.id_livro;  // Supondo que cada autor tenha um id
                    option.textContent = livro.titulo;  // Nome do autor
                    selectLivro.appendChild(option);
                });
            })
            .catch(error => {
                console.error("Erro ao carregar livros:", error);
                alert("Erro ao carregar livros.");
            });
    }

    

    // Carregar autores quando a página for carregada
    carregarFuncionario();
    carregarLivro();
    carregarAutores();
});