function permitirApenasNumeros(campo) {
    // Remove quaisquer caracteres que não sejam números
    campo.value = campo.value.replace(/[^0-9]/g, '');
}
