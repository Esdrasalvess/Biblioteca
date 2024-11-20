// Função para excluir um item baseado no tipo (autor, livro, funcionário, empréstimo)
async function excluirItem(tipo) {
    // Obter o ID inserido pelo usuário
    const id = document.getElementById(`input${tipo.charAt(0).toUpperCase() + tipo.slice(1)}Id`).value.trim();

    // Verificar se o ID é válido
    if (!id || isNaN(id)) {
        alert("Por favor, insira um ID válido.");
        return;
    }

    try {
        // Construir a URL para o endpoint de exclusão
        const endpoint = `http://localhost:8080/api/${tipo}s/${id}`; // Exemplo de endpoint

        // Realizar a requisição DELETE
        const response = await fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro ao excluir ${tipo}.`);
        }

        // Exibir mensagem de sucesso
        alert(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} excluído(a) com sucesso!`);
        
        // Limpar o campo de ID
        document.getElementById(`input${tipo.charAt(0).toUpperCase() + tipo.slice(1)}Id`).value = '';

    } catch (error) {
        // Exibir mensagem de erro em caso de falha
        console.error(error);
        alert(`Erro ao excluir ${tipo}: ${error.message}`);
    }
}
