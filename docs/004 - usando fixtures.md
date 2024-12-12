# Learn Cypress

## Criando Fixtures

Com isso vamos deixar dados em fixtures para que não deixamos os dados chumpados dentro dos testes.

Para isso precisamos fazer:

```javascript
describe('Usuarios devem realizar o login', () => {
  let data;

  before(() => {
    // No "example passamos o nome do arquivo que está dentro da página "fixtures" 
    // que servira para guardar os dados a serem usados nos specs, basta passar o nome, sem a extensão
    cy.fixture('example').then((tempData) => {
      data = tempData;
    });
  });

  // Your test case
  it('Atravez da API da aplicação com sucesso', () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8080/auth/login",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "email": data.email,
        "password": data.password
      }
    })
    .then((response) => {
      cy.log(response);
    });
  });
});
```

Para rodarmos os testes usamos:

- `npx cypress run`
