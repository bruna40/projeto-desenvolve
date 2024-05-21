# Projeto 2: Aprimoramento de Site Responsivo com Funcionalidades Dinâmicas

## Desafio
Aprimorar o site responsivo criado no projeto "Construindo um Site Responsivo com HTML e CSS" adicionando funcionalidades interativas e dinâmicas com JavaScript. As funcionalidades incluem um menu suspenso, carrossel de imagens, exibição de informações ao passar o mouse, entre outros elementos interativos.

## Etapas

### a. Identificação de Elementos
Identificamos os elementos do site onde a interatividade será aplicada, incluindo:
- Menu de navegação
- Carrossel de imagens
- Produtos carregados dinamicamente
- Formulários de pesquisa e contato

### b. Manipulação do DOM
Utilizei JavaScript para manipular o DOM e adicionar comportamentos interativos. Principais implementações:
- Criação de um menu suspenso que aparece ao clicar no ícone de menu.
- Carrossel de imagens que  pode ser controlado manualmente.
- Exibição de produtos ao carregar a página e ao interagir com o input de pesquisa.

### c. Eventos de Usuário
Implementei eventos de usuário para acionar a interatividade:
- `click`: Para abrir/fechar o menu suspenso.
- `input`: Para filtrar produtos em tempo real conforme o usuário digita na barra de pesquisa.


## Detalhes da Implementação

### API Utilizada
Para adicionar produtos dinamicamente, utilizei a API pública:
- [Makeup API](https://makeup-api.herokuapp.com/api/v1/products.json)

### Skeleton Loading
Como a API pode demorar a carregar, implementei um skeleton para melhorar a experiência do usuário enquanto os dados estão sendo carregados.

### Componentes de Produtos
Criei um componente de produtos utilizando JavaScript, onde é possível pesquisar pelo input e visualizar 5 produtos por vez, com a opção de carregar mais itens.

