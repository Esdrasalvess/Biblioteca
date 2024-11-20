async function excluirItem(tipo) {
    // Obter o ID do item com base no tipo passado
    let inputId;
    switch (tipo) {
        case 'autores':
            inputId = document.getElementById('inputAutorId');
            break;
        case 'funcionarios':
            inputId = document.getElementById('inputFuncionarioId');
            break;
        case 'livros':
            inputId = document.getElementById('inputLivroId');
            break;
        case 'emprestimos':
            inputId = document.getElementById('inputEmprestimoId');
            break;
        default:
            console.error('Tipo de exclusão desconhecido');
            return;
    }

    // Verificar se o campo de ID existe e contém um valor
    if (!inputId || !inputId.value.trim()) {
        alert("Por favor, insira um ID válido.");
        return;
    }

  
    const id = inputId.value.trim();

    try {
        const response = await fetch(`http://localhost:8080/api/${tipo}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`Erro ao excluir ${tipo}.`);
        }

        alert(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} excluído com sucesso!`);
        
        // Limpar o campo de ID após a exclusão
        inputId.value = '';
    } catch (error) {
        console.error(error);
        alert(`Erro ao excluir o ${tipo}: ${error.message}`);
    }
}
