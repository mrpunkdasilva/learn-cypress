# Learn Cypress

## Criando Specs (Testes) no Backend

```javascript
describe('Usuarios devem realizar o login', () => {
  it('Atravez da API da aplicação com sucesso', () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/auth/login",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "email": "punkdasilvateste@gmail.com",
        "password": "Teste2005@"
      }
    })
      .then((response) => {
        console.log(response)
      })
  });
});
```

> Caso ocorra um erro o Cypress tira um screenshot da página e aloca na pasta de mesmo nome, ou seja, na "screenshot" que fica dentro da pasta principal do Cypress
