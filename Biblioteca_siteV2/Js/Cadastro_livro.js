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
            });
    }

    // Função para cadastrar o livro
    function cadastrarLivro() {
        const nome = document.getElementById("titulo").value;
        const ano = document.getElementById("ano").value;
        const codigo = document.getElementById("id").value;
        const autorId = document.getElementById("selectAutor").value;

        // Verifica se o autor foi selecionado
        if (!autorId) {
            alert("Por favor, selecione um autor.");
            return;
        }

        const livro = {
            nome: nome,
            ano: ano,
            codigo: codigo,
            autorId: autorId  // Incluindo o ID do autor selecionado
        };

        // Envia a requisição para cadastrar o livro
        fetch("http://localhost:8080/api/livros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(livro)
        })
        .then(response => {
            if (response.ok) {
                alert("Livro cadastrado com sucesso!");
                // Limpa os campos após o envio
                document.getElementById("titulo").value = '';
                document.getElementById("ano").value = '';
                document.getElementById("id").value = '';
                document.getElementById("selectAutor").value = '';
            } else {
                alert("Erro ao cadastrar livro.");
            }
        })
        .catch(error => {
            console.error("Erro ao enviar requisição:", error);
            alert("Erro ao cadastrar livro.");
        });
    }

    // Carregar autores quando a página for carregada
    carregarAutores();
});
