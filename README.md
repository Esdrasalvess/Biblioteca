# Sistema de Gerenciamento de Biblioteca


**Autores:**
- Esdrás Alves dos Santos
- Matheus Souza Ramos
- Maria Letícia Almeida Gonçalves
- Rafael Almeida Santos

---

## Sumário
1. [Introdução](#introdução)  
2. [Frontend](#frontend)  
3. [Backend](#backend)  
   - [Arquitetura e Framework](#arquitetura-e-framework)  
   - [Camadas da Aplicação](#camadas-da-aplicação)  
     - [Camada de Serviços](#camada-de-serviços)  
     - [Camada de Repositórios](#camada-de-repositórios)  
       - [Responsabilidades da Camada Repository](#responsabilidades-da-camada-repository)  
       - [Vantagens da Camada Repository](#vantagens-da-camada-repository)  
4. [API](#api)  
5. [Hospedagem e Serviço AWS](#hospedagem-e-serviço-aws)  
6. [Conclusão](#conclusão)  

## Introdução
Este trabalho tem como objetivo apresentar as etapas de criação e desenvolvimento de um sistema de gerenciamento de uma biblioteca composto por frontend, backend e uma API, realizando a comunicação. O sistema tem finalidade integrar estas camadas e oferecer uma estrutura funcional para o usuário.  
Pretendendo oferecer uma interface simplificada e intuitiva ao usuário, o frontend em modelo Web foi escolhido por apresentar vantagens e funções com maior facilidade de manipulação.  
Já para a parte funcional, processamento de informações e execução de funções, uma linguagem robusta foi escolhida por lidar bem com grande quantidade de dados e possuir desempenho elevado comparado a linguagens simplificadas.

## Frontend
O frontend se trata da parte visual do trabalho, onde toda a lógica será representada por meio de janelas com botões, textos e links. Para o trabalho realizado, foi decidido que o modelo Web seria utilizado, o uso de html e css para compor sua identidade visual, e um pouco de javascript para auxiliar na navegação entre abas e lógica por trás dos botões.  
A ideia principal tinha como principal foco a divisão das funções entre diferentes abas do site: metade das abas seria dedicada a cadastros, e a outra metade seria dedicada a consultas.  
Uma divisão clara das funções facilita a abstração de ideias, permitindo maior fluidez na execução de ideias complexas e sem exigir sistemas muito complexos, visto que quanto maior a complexidade, maior a chance de uma pequena alteração causar uma grande falha no sistema.  
Visando a divisão de funções, foram feitos vários arquivos html, cada um com uma função específica e um cabeçalho comum a todos, contendo hiperlinks que levam de um html até o outro da página, todos nomeados de acordo com sua função.

Assim, cada página terá uma identidade visual específica, que ajudará na parte de cadastro ou consulta. Foram usados campos simples de preenchimento para as informações básicas de cada membro, e um botão simples para realizar o envio.

E a aba de consultas segue um padrão similar, porém contém dois filtros específicos: um para pesquisa e outro para limitar a visualização.

## Backend
O backend de uma aplicação é uma parte essencial no desenvolvimento de software, sendo responsável pela implementação, lógica de negócios e manutenção dos sistemas que sustentam a operação da aplicação. Ele abrange a criação e gerenciamento de servidores, APIs e, especialmente, o banco de dados — que é a base para armazenar e organizar as informações necessárias para o funcionamento do sistema.  
Dentro desse contexto, o banco de dados desempenha um papel central, armazenando todos os dados cruciais para a aplicação. Através de operações como consultas (queries), atualizações (updates) e exclusões (deletes), o backend interage diretamente com o banco de dados para garantir a integridade e consistência das informações ao longo do tempo. Técnicas como transações e índices são utilizadas para otimizar o desempenho e garantir que as alterações nos dados sejam realizadas de forma segura e eficiente.

### Arquitetura e Framework
O sistema foi desenvolvido utilizando o Spring Boot, um framework Java altamente eficiente e robusto, ideal para criar aplicações escaláveis e de alto desempenho. A arquitetura do projeto segue princípios que facilitam a manutenção e a escalabilidade ao longo do tempo.

### Camadas da Aplicação
O projeto adota a arquitetura MVC (Model-View-Controller), que separa as responsabilidades de forma clara, promovendo a organização e facilitando a manutenção. O Model é responsável pela estrutura de dados e pela lógica de acesso ao banco de dados. O View lida com a interface com o usuário (embora no backend, o foco seja em APIs, as Views seriam as respostas retornadas aos clientes). O Controller, por sua vez, gerencia a entrada de dados, interage com os modelos e retorna respostas apropriadas.  
Na imagem ao lado podemos ver como ficou estruturada as camadas de aplicação depois de terminar o projeto do backend.

#### Camada de Serviços
Na arquitetura de uma aplicação, a camada de Services é fundamental para garantir que a lógica de negócios seja implementada de forma isolada e desacoplada das camadas de apresentação (como o Controller) e de persistência de dados (como o Repository). Em termos simples, a camada de services é responsável por orquestrar a execução das regras de negócios, processando as entradas fornecidas pelos usuários ou clientes, aplicando a lógica de negócio necessária e interagindo com o banco de dados ou outros sistemas para realizar as operações requeridas.

##### Responsabilidades da Camada de Services
- **Implementação da Lógica de Negócios:**  
  A camada de services é onde as regras de negócio específicas da aplicação são implementadas. Isso pode incluir desde simples validações de dados até lógicas mais complexas, como cálculos financeiros, processamento de dados de entrada, ou decisões baseadas em condições de negócios.  
  Por exemplo, na nossa aplicação, a camada de services é responsável por criação dos métodos: `listarTodos()`, `buscarPorId()`, `salvar`, `atualizar` e `deletar`.

- **Intermediação entre o Controller e o Repository:**  
  Quando um Controller recebe uma requisição da API (como uma solicitação HTTP), ele geralmente não é responsável por executar toda a lógica complexa. Em vez disso, ele delega as responsabilidades de negócio para a camada de services.  
  O Service de Autor é responsável por gerenciar as operações relacionadas a esse objeto, atuando como uma camada intermediária entre a interface, a API e o banco de dados. Nesse ponto do backend, são definidas as funcionalidades como listagem geral, buscas por chave, cadastro, edição e exclusão, implementadas por meio de classes e funções. Essas operações são representadas no frontend, permitindo a interação do usuário.  
  A camada de services, por sua vez, pode interagir com o Repository para acessar ou manipular os dados no banco de dados.

#### Camada de Repositórios
A camada Repository desempenha um papel fundamental na arquitetura de uma aplicação, sendo responsável pela persistência de dados. Ela serve como intermediária entre a camada de Services e o banco de dados, proporcionando um local centralizado onde são executadas todas as operações de leitura e escrita no banco. Essa camada encapsula as interações com o banco de dados, permitindo que a lógica de negócios nas camadas superiores (como Services) não precise se preocupar com os detalhes da persistência, como SQL ou configurações específicas do banco.

##### Responsabilidades da Camada Repository
- **Operações de Banco de Dados:**  
  A principal responsabilidade da camada de repository é implementar operações fundamentais de persistência de dados, que incluem:
  - Consultas (Queries): Recuperação de dados a partir do banco, como listar registros ou buscar um item específico baseado em critérios.
  - Inserções (Insertions): Adicionar novos dados ao banco de dados.
  - Atualizações (Updates): Modificar registros existentes no banco.
  - Exclusões (Deletes): Remover registros do banco de dados.

- **Abstração do Banco de Dados:**  
  A camada de repository encapsula os detalhes de implementação da persistência de dados. Isso significa que a camada de services ou controllers não precisam se preocupar com as especificidades do banco de dados utilizado ou com a criação de consultas SQL complexas.  
  Em vez disso, a interação com o banco de dados é abstraída em métodos simples e de fácil compreensão, como `findById()`, `save()`, `delete()`, entre outros.

##### Vantagens da Camada Repository
- **Desacoplamento da Lógica de Persistência:**  
  Uma das principais vantagens da camada Repository é o desacoplamento entre a lógica de persistência de dados e a lógica de negócios da aplicação. Isso facilita a manutenção e evolução do sistema.

- **Facilidade de Manutenção e Extensão:**  
  Como as operações de persistência estão centralizadas em uma camada específica, qualquer alteração na forma como os dados são armazenados ou recuperados pode ser feita sem impactar diretamente outras partes da aplicação.

- **Eliminação de Código Boilerplate:**  
  O Spring Data JPA permite criar consultas sem precisar escrever SQL manualmente, simplificando o código e reduzindo erros.

- **Consultas Complexas com Facilidade:**  
  O Spring Data JPA também permite a criação de consultas complexas, como junções de tabelas e filtros avançados.

- **Otimização de Desempenho:**  
  Ele também é projetado para melhorar a eficiência e o desempenho das operações de banco de dados.

- **Facilidade de Testes:**  
  A camada Repository facilita a testabilidade da aplicação, permitindo realizar testes isolados sem precisar de um banco real.

- **Evolução do Sistema:**  
  À medida que a aplicação cresce, a camada Repository facilita a evolução do sistema, já que as consultas e operações de persistência estão bem encapsuladas.

## API
A API tem como objetivo fornecer uma interface de comunicação entre o frontend e o backend, permitindo a troca de dados e a execução de operações sobre o sistema. O sistema segue o padrão RESTful, onde as requisições HTTP são mapeadas para as operações CRUD correspondentes no backend.

### Exemplos de Endpoints
- **GET /api/autores:** Retorna todos os autores cadastrados.
- **GET /api/autores/{id}:** Retorna um autor específico pelo ID.
- **POST /api/autores:** Cadastra um novo autor.
- **PUT /api/autores/{id}:** Atualiza um autor existente.
- **DELETE /api/autores/{id}:** Deleta um autor.

## Hospedagem e Serviço AWS
O sistema foi hospedado utilizando a AWS (Amazon Web Services), aproveitando serviços como EC2 para execução das instâncias do backend e RDS para o banco de dados relacional. A escolha da AWS proporciona alta escalabilidade e confiabilidade.

## Conclusão
Este projeto demonstra a criação de um sistema de gerenciamento de biblioteca utilizando a arquitetura de camadas. A divisão em frontend, backend e API garante uma abordagem modular e escalável, enquanto a implementação de serviços e repositórios no backend permite um alto nível de organização e manutenibilidade. A utilização de tecnologias robustas como Spring Boot e AWS garante que o sistema seja eficiente, escalável e de fácil manutenção ao longo do tempo.

---

Se precisar de mais detalhes ou tiver dúvidas sobre o sistema, sinta-se à vontade para entrar em contato!
