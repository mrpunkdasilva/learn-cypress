# Learn Cypress

##  Usando Cypress API
Com este plugin conseguimos ter ainda mais funções para que possamos fazer o monitoramento da API

- Instalar a o plugin:
```bash
npm i cypress-plugin-api
```

- Utilizando o plugin:
```javascript
require("cypress-plugin-api");
import urls from "./urls";
Cypress.Commands.add("loginApi", (email, password) => {
    cy.api({
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

- Podemos também esconder nossas credencias:
```javascript
// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      requestMode: true,
      hideCredentials: true,
      hideCredentialsOptions: {
        body: ["email", "password"]
      }
    }
  },
});
```


> Para mais: https://github.com/filiphric/cypress-plugin-api