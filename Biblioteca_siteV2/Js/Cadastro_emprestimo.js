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
    const funcionario_responsavel = document.getElementById("selectFuncionario").value;
    const livro = document.getElementById("selectLivro").value; 
    const data_inicial = document.getElementById("selectAutor").value;
    const data_final = document.getElementById("selectAutor").value;
    const id_emprestimo = document.getElementById("id_emprestimo");

    // Verifica se o autor foi selecionado
    if (!leitor) {
        alert("Por favor, insira um leitor.");
        return;
    }
    if (!funcionario_responsavel) {
        alert("Por favor, selecione um funcionário responsável.");
        return;
    }
    if (!livro) {
        alert("Por favor, selecione um livro.");
        return;
    }
    if (!data_inicial) {
        alert("Por favor, insira a data de empréstimo.");
        return;
    }
    if (!data_final) {
        alert("Por favor, insira a data de devolução.");
        return;
    }
   

    const emprestimo = {

            id_emprestimo: id_emprestimo,
        dataEmprestimo: data_inicial, 
        dataDevolucao: data_final, 
        leitor: {
            nome: leitor
        },
        funcionario:{
            nome: funcionario_responsavel
        },
        livro:{
            titulo: livro
        },
        status: "EMPRESTADO"
    };

    console.log(emprestimo);

 
    fetch("http://localhost:8080/api/emprestimos", {
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
            leitor.value = '';
            funcionario_responsavel.value = '';
            livro.value = '';
            data_inicial.value = '';
            data_final.value = '';
            id_emprestimo.value = '';
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
