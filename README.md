# Bonita cosmeticos

## Projeto desenvolvido duranteo curso desenvolve

### Sobre o projeto
O projeto Bonita Cosméticos é um site que oferece uma ampla variedade de produtos de beleza. Com uma interface intuitiva e recursos avançados de pesquisa e filtragem. O site é voltado para pessoas interessadas em cuidados pessoais e beleza, oferecendo produtos de alta qualidade e marcas renomadas. Explore nossa coleção de cosméticos, produtos para cuidados com a pele, maquiagem e muito mais!


### Como rodar o projeto
```bash
git clone git@github.com:bruna40/projeto-desenvolve.git
```

### Tecnologias utilizadas
- HTML
- CSS
- JavaScript

### Funcionalidades
- Interface Intuitiva: Layout projetado para facilitar a navegação e a visualização dos produtos.
- Pesquisa e Filtragem Avançada: Permite aos usuários pesquisar produtos por nome,com resultados atualizados em tempo real.
- Carregamento Dinâmico de Produtos: Produtos são carregados de forma dinâmica através de uma API, melhorando a performance e a experiência do usuário.
- Paginação: Implementada para otimizar o carregamento dos produtos e melhorar o desempenho da página. A paginação carrega um número específico de produtos por vez, reduzindo o tempo de carregamento inicial e a sobrecarga do servidor.
### Melhorias e Alterações
- Integração com API: A comunicação com o backend é feita via API para obter dados dos produtos. A API permite a obtenção de produtos com suporte a filtros e paginação.
- Otimização do JavaScript: Alterações significativas nas regras de JavaScript para suportar a paginação e melhorar a experiência do usuário, incluindo:
- Gerenciamento Eficiente do Estado: Implementação de funções para controlar o estado da página, como showProducts, que agora lida com a exibição de produtos e esqueleto de carregamento de maneira mais eficiente.
- Esqueleto de Carregamento: Adição de esqueleto de carregamento (skeleton screen) para melhorar a experiência visual enquanto os dados estão sendo carregados.
- Paginação e Carregamento Progressivo: Ajustes para garantir que a função de "Ver Mais" carregue e adicione produtos de forma dinâmica e eficiente.
