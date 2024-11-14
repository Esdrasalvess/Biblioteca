// Função chamada quando o botão de enviar é pressionado
function cadastrarAutor() {
    // Coleta os dados do formulário
    const id = document.querySelector('input[placeholder="ID"]').value;
    const nome = document.getElementById("nome").value;
    const nacionalidade = document.getElementById("cargo").value; // "cargo" é a nacionalidade aqui

    // Cria o objeto com os dados do autor
    const autor = {
        id: id,
        nome: nome,
        nacionalidade: nacionalidade
    };

    // Envia os dados para o backend via POST
    fetch("http://localhost:8080/api/autores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(autor)
    })
    .then(response => {
        if (response.ok) {
            alert("Autor cadastrado com sucesso!");
            // Limpa os campos após o envio
            document.querySelector('input[placeholder="ID"]').value = '';
            document.getElementById("nome").value = '';
            document.getElementById("cargo").value = '';
        } else {
            alert("Erro ao cadastrar autor.");
        }
    })
    .catch(error => {
        console.error("Erro ao enviar requisição:", error);
        alert("Erro ao cadastrar autor.");
    });
}

// Função para permitir apenas números no campo de ID
function permitirApenasNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove tudo que não for número
}
