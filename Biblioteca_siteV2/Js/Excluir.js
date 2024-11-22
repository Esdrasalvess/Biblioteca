async function excluirItem(tipo) {
    try {
        // Mostrar o alerta de confirmação
        const confirmar = await mostrarModalConfirmacao();
        if (!confirmar) {
            return; // Se o usuário escolher "Não", a função é encerrada
        }

        // Obter o ID do item com base no tipo passado
        const inputIdMap = {
            'autores': 'inputAutorId',
            'funcionarios': 'inputFuncionarioId',
            'livros': 'inputLivroId',
            'emprestimos': 'inputEmprestimoId'
        };

        const inputId = document.getElementById(inputIdMap[tipo]);

        // Verificar se o campo de ID existe e contém um valor
        if (!inputId || !inputId.value.trim()) {
            alert("Por favor, insira um ID válido.");
            return;
        }

        const id = inputId.value.trim();

        // Realizar a requisição DELETE
        const response = await fetch(`http://localhost:8080/api/${tipo}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ${response.status}: ${errorText}`);
        }

        alert(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} excluído com sucesso!`);

        // Limpar o campo de ID após a exclusão
        inputId.value = '';
    } catch (error) {
        console.error(error);
        alert(`Erro ao excluir ${tipo}: ${error.message}`);
    }
}

async function mostrarModalConfirmacao() {
    return new Promise(resolve => {
        // Criar modal de confirmação
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = 'white';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '5px';
        modalContent.style.textAlign = 'center';
        modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        modalContent.style.width = '300px';

        const message = document.createElement('p');
        message.textContent = 'Tem certeza que deseja excluir?';
        modalContent.appendChild(message);

        const buttons = document.createElement('div');
        buttons.style.marginTop = '20px';

        const btnSim = document.createElement('button');
        btnSim.textContent = 'Sim';
        btnSim.style.margin = '0 10px';
        btnSim.style.padding = '10px 20px';
        btnSim.style.backgroundColor = '#28a745';
        btnSim.style.color = '#fff';
        btnSim.style.border = 'none';
        btnSim.style.borderRadius = '5px';
        btnSim.style.cursor = 'pointer';
        btnSim.onclick = () => {
            resolve(true); // Resolver a promessa com "true"
            document.body.removeChild(modal); // Remover o modal
        };

        const btnNao = document.createElement('button');
        btnNao.textContent = 'Não';
        btnNao.style.margin = '0 10px';
        btnNao.style.padding = '10px 20px';
        btnNao.style.backgroundColor = '#dc3545';
        btnNao.style.color = '#fff';
        btnNao.style.border = 'none';
        btnNao.style.borderRadius = '5px';
        btnNao.style.cursor = 'pointer';
        btnNao.onclick = () => {
            resolve(false); // Resolver a promessa com "false"
            document.body.removeChild(modal); // Remover o modal
        };

        buttons.appendChild(btnSim);
        buttons.appendChild(btnNao);
        modalContent.appendChild(buttons);
        modal.appendChild(modalContent);

        // Adicionar modal ao body
        document.body.appendChild(modal);
    });
}
