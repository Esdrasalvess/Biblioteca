function enviarDados() {
    // Captura os valores de todos os campos
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    
    // Extrai o ano da data completa
    const anoCompleto = document.getElementById('ano').value;
    const ano = anoCompleto ? new Date(anoCompleto).getFullYear() : null;  // Pega só o ano ou null se o campo estiver vazio
    
    const codigo = document.getElementById('codigo').value;

    // Cria um objeto com todos os dados
    const dados = {
        titulo: titulo,
        autor: autor,
        anoPublicacao: ano,
        codigo: codigo
    };

    // Faz a requisição para o endpoint
    fetch('http://localhost:3000/api/livros', {  // Substitua pelo seu endpoint para envio de dados
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)  // Converte os dados para JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dados enviados com sucesso:', data);  // Mostra a resposta no console
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);  // Mostra o erro no console
    });
}
