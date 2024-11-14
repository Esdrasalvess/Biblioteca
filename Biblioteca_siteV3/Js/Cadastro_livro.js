function enviardados() {
    // Obtendo os valores dos campos do formulário
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = document.getElementById("ano").value;
    const codigo = document.getElementById("codigo").value;

    // Criando o objeto livro com os dados obtidos
    const livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        codigo: codigo
    };

    // Enviando os dados para a API de cadastro de livros
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
        } else {
            alert("Erro ao cadastrar livro.");
        }
    })
    .catch(error => {
        console.error("Erro ao enviar requisição:", error);
        alert("Erro ao cadastrar livro.");
    });
}
