# Learn Cypress

## Criando Specs (Testes) no Frontend

Para criarmos uma `spec` podemos fazer o seguinte:

```javascript
describe('Usuarios devem realizar o login', () => {
  it('Atravez da página da aplicação com sucesso', () => {
    // # Definição da página alvo
    cy.visit('http://localhost:5173/pages/auth/login.html');
    
    // # Manipulação da página
    // Preenche o input
    cy.get("input[id='email']").type("gustavojs317@gmail.com");
    // Clica no button
    cy.get("div[aria-label='1 / 2'].swiper-slide.swiper-slide-active button ").click();
    // Preenche o input
    cy.get("input#password").type("Teste2005@");
    // Clica no button
    cy.get("button#btnLogin").click();
  });
});
```

O seguinte spec faz o teste automatizado no login da aplicação que passei na `visit`
Para rodar esse teste, basta irmos na página do navegador que e clicar em spec > clique no seu spec

