FormConsulta.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Inicializando o objeto de filtros
    const filtros = {};

    // Adiciona o filtro para cada campo de pesquisa, se o checkbox estiver marcado
    if (checkboxFiltroNome.checked && pesquisaNome.value.trim() !== "") {
        filtros.nome = pesquisaNome.value.trim();
    }
    if (checkboxFiltroNacionalidade.checked && pesquisaNacionalidade.value.trim() !== "") {
        filtros.nacionalidade = pesquisaNacionalidade.value.trim();
    }
    if (checkboxFiltroId.checked && pesquisaId.value.trim() !== "") {
        const id = pesquisaId.value.trim();
        if (!isNaN(id)) filtros.id_autor = id;
    }

    console.log(filtros); // Para depuração

    const url = new URL("http://localhost:8080/api/autores");

    // Se houver filtros, adiciona à URL. Se não, não será adicionado nada, e todos os autores serão retornados.
    Object.entries(filtros).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Erro ao consultar autores: !resposta.ok");

        const autores = await response.json();
        const tbody = document.querySelector("#resultadoConsultaAutor tbody");
        const thead = document.querySelector("#resultadoConsultaAutor thead");
        tbody.innerHTML = ""; // Limpa os dados anteriores
        const headerRow = document.querySelector("#headerRowAutor");
        headerRow.innerHTML = ""; // Limpa os títulos anteriores

        // Adicionando os cabeçalhos com base nos checkboxes
        if (checkboxVisibilidadeNome.checked) {
            const thNome = document.createElement("th");
            thNome.textContent = "Nome";
            headerRow.appendChild(thNome);
        }
        if (checkboxVisibilidadeNacionalidade.checked) {
            const thNacionalidade = document.createElement("th");
            thNacionalidade.textContent = "Nacionalidade";
            headerRow.appendChild(thNacionalidade);
        }
        if (checkboxVisibilidadeId.checked) {
            const thId = document.createElement("th");
            thId.textContent = "ID";
            headerRow.appendChild(thId);
        }

        if (autores.length === 0) {
            tbody.innerHTML = "<tr><td colspan='4'>Nenhum autor encontrado.</td></tr>";
            return;
        }

        // Adicionando os dados na tabela
        autores.forEach(autor => {
            const tr = document.createElement("tr");

            if (checkboxVisibilidadeNome.checked) {
                const tdNome = document.createElement("td");
                tdNome.textContent = autor.nome || "N/A";
                tr.appendChild(tdNome);
            }
            if (checkboxVisibilidadeNacionalidade.checked) {
                const tdNacionalidade = document.createElement("td");
                tdNacionalidade.textContent = autor.nacionalidade || "N/A";
                tr.appendChild(tdNacionalidade);
            }
            if (checkboxVisibilidadeId.checked) {
                const tdId = document.createElement("td");
                tdId.textContent = autor.id_autor || "N/A";
                tr.appendChild(tdId);
            }

            tbody.appendChild(tr);
        });
        
    } catch (error) {
        console.error("Erro ao buscar autores:", error);    
        alert("Ocorreu um erro ao buscar os dados dos autores. Tente novamente.");
    }
});
