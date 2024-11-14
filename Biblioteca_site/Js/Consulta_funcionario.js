document.addEventListener("DOMContentLoaded", function () {
    const formConsultaFuncionario = document.getElementById("formConsultaFuncionario");

    // Mostrar campos de pesquisa com base no checkbox selecionado
    formConsultaFuncionario.addEventListener("change", function () {
        const nomeCheckbox = document.getElementById("consulta/funcionario/selecionar_nome");
        const cargoCheckbox = document.getElementById("consulta/funcionario/selecionar_cargo");
        const idCheckbox = document.getElementById("consulta/funcionario/selecionar_id");

        document.getElementById("campo_funcionario_nome").style.display = nomeCheckbox.checked ? "block" : "none";
        document.getElementById("campo_funcionario_cargo").style.display = cargoCheckbox.checked ? "block" : "none";
        document.getElementById("campo_funcionario_id").style.display = idCheckbox.checked ? "block" : "none";
    });

    // Função para renderizar resultados na tabela
    function renderizarResultados(resultados) {
        const tbody = document.querySelector("#resultadoConsulta tbody");
        tbody.innerHTML = ""; // Limpar resultados anteriores

        resultados.forEach(funcionario => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${funcionario.nome}</td>
                <td>${funcionario.cargo}</td>
                <td>${funcionario.codigo}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Enviar consulta ao backend e renderizar resultados
    formConsultaFuncionario.addEventListener("submit", function (event) {
        event.preventDefault();

        // Coletar filtros selecionados e valores
        const filtros = {
            nome: document.getElementById("consulta/funcionario/selecionar_nome").checked ? document.getElementById("pesquisa_funcionario_nome").value : null,
            cargo: document.getElementById("consulta/funcionario/selecionar_cargo").checked ? document.getElementById("pesquisa_funcionario_cargo").value : null,
            id: document.getElementById("consulta/funcionario/selecionar_id").checked ? document.getElementById("pesquisa_funcionario_id").value : null
        };

        // Simulação de chamada de API
        const resultadosSimulados = [
            { nome: "João Silva", cargo: "Bibliotecário", codigo: "123" },
            { nome: "Maria Souza", cargo: "Auxiliar", codigo: "456" }
        ];

        // Filtrar resultados simulados com base nos filtros aplicados
        const resultadosFiltrados = resultadosSimulados.filter(funcionario => {
            return (!filtros.nome || funcionario.nome.includes(filtros.nome)) &&
                   (!filtros.cargo || funcionario.cargo.includes(filtros.cargo)) &&
                   (!filtros.id || funcionario.codigo.includes(filtros.id));
        });

        // Renderizar na tabela
        renderizarResultados(resultadosFiltrados);
    });
});
