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
    const id_livro = document.getElementById("selectLivro").value; // Select para o livro
    const id_autor = document.getElementById("selectAutor").value;
    const nome_autor = document.getElementById("selectAutor").options[document.getElementById("selectAutor").selectedIndex].text;
    const id_leitor = document.getElementById("selectLeitor").value;  // Select para o leitor
    const id_funcionario = document.getElementById("selectFuncionario").value;  // Select para o funcionário responsável
    const dataEmprestimo = document.getElementById("dataEmprestimo").value;  // Campo de data de empréstimo
    const dataDevolucao = document.getElementById("dataDevolucao").value;  // Campo de data de devolução

    // Verifica se todos os campos necessários foram preenchidos
    if (!id_autor || !titulo || !ano || !id_livro || !id_leitor || !id_funcionario || !dataEmprestimo || !dataDevolucao) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const livro = {
        id_livro: id_livro,
        titulo: titulo,
        anoPublicacao: ano,
        autor: {
            id_autor: id_autor,
            nome: nome_autor
        }
    };

    const emprestimo = {
        dataEmprestimo: dataEmprestimo,
        dataDevolucao: dataDevolucao,
        leitor: {
            id_leitor: id_leitor
        },
        funcionario: {
            id_funcionario: id_funcionario
        },
        livro: livro,
        status: "EMPRESTADO"  // Status do empréstimo
    };

    console.log(emprestimo);

    // Envia a requisição para cadastrar o empréstimo
    fetch("http://localhost:8080/api/emprestimos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emprestimo)
    })
    .then(response => {
        console.log("Status da resposta:", response.status);
        if (response.ok) {
            alert("Empréstimo cadastrado com sucesso!");
            // Limpa os campos após o envio
            document.getElementById("titulo").value = '';
            document.getElementById("ano").value = '';
            document.getElementById("selectLivro").value = '';
            document.getElementById("selectAutor").value = '';
            document.getElementById("selectLeitor").value = '';
            document.getElementById("selectFuncionario").value = '';
            document.getElementById("dataEmprestimo").value = '';
            document.getElementById("dataDevolucao").value = '';
        } else {
            response.text().then(text => {
                console.log("Resposta do servidor:", text);
                alert("Erro ao cadastrar empréstimo. Status: " + response.status + " - " + text);
            });
        }
    })
    .catch(error => {
        console.error("Erro ao enviar requisição:", error);
        alert("Erro ao cadastrar empréstimo (requisição).");
    });
}
