# 🧪 Projeto de Automação de Testes - Demoblaze

Este projeto realiza testes automatizados no site [Demoblaze](https://www.demoblaze.com/) utilizando **Playwright**, **Cucumber (BDD)** e o padrão **Page Object Model**. O objetivo principal é validar se os produtos adicionados ao carrinho mantêm o nome e o preço corretos.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [Page Object Model](https://martinfowler.com/bliki/PageObject.html)

---

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
Instale as dependências:

bash
npm install
🧪 Executando os testes
Modo com navegador visível (headed):
bash
npm run test:headed:win
Modo headless (sem interface gráfica):
bash
npm test
📝 Estrutura do Projeto
Código
├── tests
│   ├── features
│   │   └── cart.feature         # Cenários BDD
│   ├── steps
│   │   └── cart.steps.js        # Implementação dos passos
│   ├── pages
│   │   ├── HomePage.js          # Página inicial
│   │   ├── ProductPage.js       # Página de produto
│   │   └── CartPage.js          # Página do carrinho
│   └── support
│       └── hooks.js             # Hooks de execução
├── playwright.config.js         # Configuração do Playwright
└── package.json                 # Scripts e dependências
📚 Funcionalidades Testadas
Acesso à home do Demoblaze

Abertura de página de produto

Captura de nome e preço

Adição ao carrinho

Validação de nome e preço no carrinho

🧠 Autor
Éder Projeto de Conclusão - Formação em Testes com JavaScript Iterasys | 2025
