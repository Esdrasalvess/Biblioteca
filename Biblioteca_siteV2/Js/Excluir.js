document.addEventListener('DOMContentLoaded', function () {
    // Função para excluir empréstimo
    function excluirEmprestimo() {
        // Obtém o ID do empréstimo a ser excluído
        const idExcluir = document.querySelector("#idExcluir").value;

        // Verifica se o campo de ID foi preenchido
        if (!idExcluir) {
            alert("Por favor, insira o ID do empréstimo a ser excluído.");
            return;
        }

        // Configura a URL do endpoint de exclusão
        const url = `http://localhost:8080/api/emprestimos/${idExcluir}`;

        // Faz a requisição para excluir o empréstimo
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            console.log("Status da resposta:", response.status);
            if (response.ok) {
                alert("Empréstimo excluído com sucesso!");
                // Limpa o campo de ID após a exclusão
                document.querySelector("#idExcluir").value = '';
            } else {
                response.text().then(text => {
                    console.error("Resposta do servidor:", text);
                    alert("Erro ao excluir empréstimo. Status: " + response.status + " - " + text);
                });
            }
        })
        .catch(error => {
            console.error("Erro ao enviar requisição:", error);
            alert("Erro ao excluir empréstimo (requisição).");
        });
    }

    // Associa a função de exclusão ao clique do botão
    document.querySelectorAll(".butaoExcluir").forEach(button => {
        button.addEventListener("click", excluirEmprestimo);
    });
});
