
 
  
// common.js
document.addEventListener("DOMContentLoaded", function() {
  fetch('./assets/head.html') // Carrega o conteúdo de head.html
    .then(response => response.text())
    .then(data => {
      document.head.innerHTML += data; // Insere o conteúdo no <head>
    })
    .catch(error => console.error('Erro ao carregar o conteúdo do head:', error));
});


