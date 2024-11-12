
document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById('cabeçalho');
    
    // Verifica se o container de cabeçalho existe na página
    if (headerContainer) {
      fetch('./assets/cabeçalho.html') // Carrega o conteúdo do arquivo header.html
        .then(response => response.text())
        .then(data => {
          headerContainer.innerHTML = data; // Adiciona o conteúdo ao container
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
    }
  });
  