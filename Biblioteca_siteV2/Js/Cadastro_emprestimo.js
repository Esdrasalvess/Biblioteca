document.addEventListener('DOMContentLoaded', function () {
    // Função para carregar os autores no select
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
});

// Função para cadastrar o livro
function cadastrarEmprestimo() {
    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const id_livro = document.getElementById("id").value; 
    const id_autor = document.getElementById("selectAutor").value;
    const nome_autor = document.getElementById("selectAutor").options[document.getElementById("selectAutor").selectedIndex].text;

    // Verifica se o autor foi selecionado
    if (!id_autor) {
        alert("Por favor, selecione um autor.");
        return;
    }
    if (!titulo) {
        alert("Por favor, insira um título.");
        return;
    }
    if (!ano) {
        alert("Por favor, selecione um ano.");
        return;
    }

    const livro = {
        titulo: titulo,
        anoPublicacao: ano,
        id_livro: id_livro,
        autor: {
            id_autor: id_autor,
            nome: nome_autor
  
        }
    };

    console.log(livro);

 
    fetch("http://localhost:8080/api/livros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(livro)
    })
    .then(response => {
        console.log("Status da resposta:", response.status);
        if (response.ok) {
            alert("Livro cadastrado com sucesso!");
            // Limpa os campos após o envio
            document.getElementById("titulo").value = '';
            document.getElementById("ano").value = '';
            document.getElementById("id").value = '';
            document.getElementById("selectAutor").value = '';
        } else {
            response.text().then(text => {
                console.log("Resposta do servidor:", text);
                alert("Erro ao cadastrar livro. Status: " + response.status + " - " + text);
            });
        }
    })
    .catch(error => {
        console.error("Erro ao enviar requisição:", error);
        alert("Erro ao cadastrar livro (requisição).");
    });
}
