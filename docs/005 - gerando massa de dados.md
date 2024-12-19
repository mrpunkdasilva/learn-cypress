# Learn Cypress

##  Gerando massa de dados

Servira para automatizar a geração de dados para testes

Para criar os comandos personalizados para reutilizar e automatizar, devemos ir para a pasta de `suport` e colocar os comandos dentro da pasta `command.js`

```javascript
// commands.js
Cypress.Commands.add("login", (email, password) => {
    cy.visit('http://localhost:5173/pages/auth/login.html');

    cy.get("input[id='email']").type(email);
    cy.get("div[aria-label='1 / 2'].swiper-slide.swiper-slide-active button ").click();
    cy.get("input#password").type(password);
    cy.get("button#btnLogin").click();
});
```

### Utilizando o Faker junto com commands

```javascript
// api/login.spec.cy.js
import { faker } from '@faker-js/faker';

describe('Usuarios devem realizar o login', () => {
  let data;

  before(() => {
    cy.fixture('example').then((tempData) => {
      data = tempData;
    });
  });

  it('Atravez da API da aplicação com sucesso', () => {
   cy.loginApi(faker.internet.email(), faker.internet.password());
  });
});
```


```javascript
// commands.js
Cypress.Commands.add("loginApi", (email, password) => {
    cy.request({
        method: "POST",
        url: "http://localhost:8080/auth/login",
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            "email": email,
            "password": password
        }
    })
        .then((response) => {
            cy.log(response);
        });
});
```