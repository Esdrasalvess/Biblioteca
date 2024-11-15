function cadastrarLivro() {
    const nome = document.getElementById("nome").value;
    const ano = document.getElementById("ano").value;
    const codigo = document.getElementById("código").value;
    const autorId = document.getElementById("selectAutor").value;

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
            document.getElementById("nome").value = '';
            document.getElementById("ano").value = '';
            document.getElementById("código").value = '';
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
