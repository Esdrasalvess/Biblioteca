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

    // Carregar autores quando a página for carregada
    carregarAutores();
});


// Função para cadastrar o livro
function cadastrarLivro() {
    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const id_livro = document.getElementById("id").value;  // Certifique-se de que o 'id' está correto
    const id_autor = document.getElementById("selectAutor").value;

    // Verifica se o autor foi selecionado
    if (!id_autor) {
        alert("Por favor, selecione um autor.");
        return;
    }

    // Verifica se o título foi informado
    if (!titulo) {
        alert("Por favor, insira um título.");
        return;
    }

    // Verifica se o ano foi selecionado
    if (!ano) {
        alert("Por favor, selecione um ano.");
        return;
    }

    // Se passou pelas verificações, construa o objeto livro
    const livro = {
        titulo: titulo,
        ano: ano,
        id_livro: id_livro,
        id_autor: id_autor
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
        console.log(response);  // Log da resposta
        if (response.ok) {
            alert("Livro cadastrado com sucesso!");
            // Limpa os campos após o envio
            document.getElementById("titulo").value = '';
            document.getElementById("ano").value = '';
            document.getElementById("id").value = '';
            document.getElementById("selectAutor").value = '';
        } else {
            alert("Erro ao cadastrar livro. Status: " + response.status);
        }
    })
    .catch(error => {
        console.error("Erro ao enviar requisição:", error);
        alert("Erro ao cadastrar livro.");
    });
}


