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
    const leitor = document.getElementById("leitor").value;
    const id_emprestimo = document.getElementById("id_emprestimo").value;
    const selectFuncionario = document.getElementById("selectFuncionario");
    const selectLivro = document.getElementById("selectLivro");

    const id_funcionario = selectFuncionario.value;
    const nome_funcionario = selectFuncionario.options[selectFuncionario.selectedIndex]?.text;  // Acessa o nome do funcionário selecionado
    const id_livro = selectLivro.value;
    const nome_livro = selectLivro.options[selectLivro.selectedIndex]?.text;  // Acessa o título do livro selecionado

    const data_inicial = document.getElementById("data_inicial").value;
    const data_final = document.getElementById("data_final").value;

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!leitor) {
        alert("Por favor, insira o nome do leitor.");
        return;
    }
    if (!id_funcionario) {
        alert("Por favor, selecione o funcionário responsável.");
        return;
    }
    if (!id_livro) {
        alert("Por favor, selecione o livro.");
        return;
    }
    if (!data_inicial && !data_final) {
        alert("Por favor, selecione as datas de empréstimo e devolução.");
        return;
    }

    const emprestimo = {
        leitor: {
            nome: leitor // Aqui pode ser o nome do leitor (ou um ID, dependendo da implementação)
        },
        funcionario: {
            id_funcionario: id_funcionario,
            nome: nome_funcionario
        },
        livro: {
            id_livro: id_livro,
            titulo: nome_livro
        },
        dataEmprestimo: data_inicial,
        dataDevolucao: data_final,
        id_emprestimo: id_emprestimo,
        status: "EMPRESTADO" // Pode adicionar status se for necessário, caso contrário, remova
    };

    console.log(emprestimo);

    // Fazendo a requisição para o backend
    fetch("http://localhost:8080/api/emprestimos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emprestimo)
    })
    .then(response => {
        console.log("Status da resposta:", response.status);
        console.log(emprestimo);
        if (response.ok) {
            alert("Empréstimo cadastrado com sucesso!");
            // Limpa os campos após o envio
            document.getElementById("leitor").value = '';
            document.getElementById("id_emprestimo").value = '';
            document.getElementById("selectFuncionario").value = '';
            document.getElementById("selectLivro").value = '';
            document.getElementById("data_inicial").value = '';
            document.getElementById("data_final").value = '';
        } else {
            console.log(emprestimo);
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

