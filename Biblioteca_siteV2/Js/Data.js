function formatDate(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    if (value.length > 5) {
        value = value.slice(0, 5) + '/' + value.slice(5);
    }
    input.value = value; // Atualiza o valor no campo
}
