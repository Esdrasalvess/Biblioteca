# Sistema de Gerenciamento de Biblioteca

**Faculdade Independente do Nordeste**  
**Bacharelado em Engenharia da Computação**

**Autores:**
- Esdrás Alves dos Santos
- Matheus Souza Ramos
- Maria Letícia Almeida Gonçalves
- Rafael Almeida Santos

**Vitória da Conquista - BA, 2024**

---

## Sumário

1. [Introdução](#introdução)
2. [Frontend](#frontend)
3. [Backend](#backend)
   - [Arquitetura e Framework](#arquitetura-e-framework)
   - [Camadas da Aplicação](#camadas-da-aplicação)
     - [Camada de Serviços](#camada-de-serviços)
     - [Camada de Repositórios](#camada-de-repositórios)
   - [Vantagens da Camada Repository](#vantagens-da-camada-repository)
4. [API](#api)
5. [Conclusão](#conclusão)

---

## Introdução

Este projeto tem como objetivo a criação de um sistema de gerenciamento de biblioteca, composto por três camadas principais: **Frontend**, **Backend** e uma **API** que realiza a comunicação entre elas. O sistema permite a gestão eficiente de cadastros de livros, usuários, empréstimos e consultas, com uma interface simplificada e funcional.

O **Frontend** foi desenvolvido em modelo web, proporcionando uma interface gráfica intuitiva e interativa, enquanto o **Backend** foi desenvolvido utilizando **Spring Boot**, oferecendo robustez e escalabilidade. A **API** serve como ponto de comunicação entre o frontend e o backend, garantindo que as requisições sejam processadas de maneira eficiente e segura.

---

## Frontend

O **Frontend** do sistema é responsável pela interface com o usuário, permitindo a interação com as funcionalidades do sistema por meio de um navegador web. Utilizando **HTML**, **CSS** e **JavaScript**, criamos páginas que facilitam o cadastro e consulta de informações de forma clara e intuitiva.

A interface foi dividida em diferentes abas, com as funções de **cadastro** e **consulta** separadas, facilitando a navegação do usuário. O código foi organizado em arquivos **HTML** específicos para cada função, com cabeçalhos comuns e links de navegação que interconectam as páginas. A navegação entre as páginas é realizada através de **JavaScript**, que também gerencia a lógica por trás dos botões e filtros.

---

## Backend

O **Backend** é responsável pela lógica de negócios e pelo processamento das requisições vindas do frontend. Ele abrange a criação e manutenção de servidores, APIs e banco de dados.

### Arquitetura e Framework

O sistema foi desenvolvido utilizando **Spring Boot**, um framework Java robusto e eficiente, ideal para aplicações de grande escala. A arquitetura do sistema segue o padrão **MVC** (Model-View-Controller), que facilita a manutenção e a escalabilidade.

### Camadas da Aplicação

O projeto segue a arquitetura **MVC**:
- **Model**: Responsável pela estrutura de dados e lógica de acesso ao banco.
- **View**: Interface com o usuário (no backend, as Views são as respostas retornadas pela API).
- **Controller**: Gerencia as requisições e interage com os Models para fornecer as respostas adequadas.

A organização em camadas facilita a manutenção do código e a implementação de novas funcionalidades.

#### Camada de Serviços

A camada de **Serviços** é responsável pela implementação da lógica de negócios, isolando a complexidade das operações. Ela orquestra a execução das regras de negócios, interagindo com o banco de dados através da camada **Repository** e delegando as responsabilidades para os controllers, garantindo que a lógica de negócio seja reutilizável e bem organizada.

Exemplo de métodos na camada de serviços:
- **listarTodos()**: Retorna todos os registros de um determinado modelo.
- **buscarPorId()**: Busca um registro pelo seu ID.
- **salvar()**, **atualizar()**, **deletar()**: Realizam operações CRUD (criar, ler, atualizar e excluir).

#### Camada de Repositórios

A camada de **Repositórios** é responsável pela persistência de dados. Ela interage diretamente com o banco de dados, executando as operações CRUD e abstraindo a lógica de persistência do restante da aplicação. Com o uso do **Spring Data JPA**, a camada Repository elimina a necessidade de escrever SQL manual, oferecendo uma interface simples para as operações.

Exemplo de operações da camada Repository:
- **findById()**, **save()**, **delete()**: Métodos básicos para manipulação de dados.

##### Vantagens da Camada Repository

1. **Desacoplamento da Lógica de Persistência**: A camada Repository isola a lógica de persistência de dados da lógica de negócios, tornando o código mais modular e facilitando a manutenção.
2. **Facilidade de Manutenção e Extensão**: Mudanças no banco de dados ou nas operações de persistência podem ser feitas sem impactar outras camadas.
3. **Eliminação de Código Boilerplate**: O Spring Data JPA reduz a quantidade de código repetitivo, gerando automaticamente consultas baseadas em métodos de nomenclatura.
4. **Consultas Complexas**: Permite a criação de consultas complexas de forma simples com **JPQL** ou SQL nativo.
5. **Otimização de Desempenho**: Suporta otimizações como **paginamento** e **fetching em lote**, melhorando o desempenho do sistema.
6. **Facilidade de Testes**: Facilitando o uso de **mocking** e bancos de dados em memória para testes rápidos e eficazes.
7. **Evolução do Sistema**: Facilita a adição de novas funcionalidades e mudanças no banco de dados sem impacto nas camadas superiores.

---

## API

A **API** é o ponto de interação entre o **Frontend** e o **Backend**, permitindo que as requisições feitas pela interface do usuário sejam processadas e que as respostas adequadas sejam enviadas. A comunicação é realizada através de **endpoints** que implementam as operações CRUD para as entidades do sistema, como **usuários**, **funcionários**, **livros** e **empréstimos**.

Os endpoints são manipulados por **controllers** que recebem as requisições do frontend, processam a lógica de negócios com a ajuda da camada de serviços e interagem com o banco de dados através da camada Repository. Este processo é realizado de maneira modular, garantindo que cada camada tenha responsabilidades bem definidas.

---

## Conclusão

O sistema de gerenciamento de biblioteca desenvolvido neste projeto oferece uma solução robusta e eficiente para a gestão de cadastros e consultas, com uma interface amigável ao usuário. A separação clara entre as camadas de **Frontend**, **Backend** e **API** garante que o sistema seja escalável, modular e de fácil manutenção.

A **camada de frontend** proporciona uma experiência de usuário simples e eficiente, enquanto o **backend** processa e gerencia as informações com o suporte do **Spring Boot**. A **API** conecta todas as camadas, permitindo uma comunicação fluida entre o frontend e o backend.

Este projeto demonstrou a importância de uma boa arquitetura de software e a implementação de boas práticas para garantir a escalabilidade, manutenção e segurança de sistemas complexos.

---

Se precisar de mais detalhes ou tiver dúvidas sobre o sistema, sinta-se à vontade para entrar em contato!
