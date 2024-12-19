# Learn Cypress

##  Seletores de Objetos
Agora vamos parametrizar os seletores de objetos como:
- URLs
- Objetos do DOM

### URLs
- Crie um arquivo `urls.js` dentro da pasta de `support`
- Agora crie o código:
```javascript
module.exports = {
    apiLogin: "http://localhost:8080/auth/login"
} 
```
- Depois usamos no `commands.js`:
```javascript
import urls from "./urls";
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

---

### Objetos DOM
- Crie uma nova pasta na raiz do `cypress` chamada: `selectors`
- Crie um arquivo de selector para cada módulo: `login.sel.cy.js`
- Adicione o código:
```javascript
module.exports = {
    inputEmail: "input[id='email']",
    buttonNextStepOne: "div[aria-label='1 / 2'].swiper-slide.swiper-slide-active button",
    inputPassword: "input#password",
    buttonLogin: "button#btnLogin"
};
```
- Depois no commands devo fazer a utilização:
```javascript
import loginSelectors from "../selectors/login.sel.cy";

Cypress.Commands.add("login", (email, password) => {
    cy.visit(urls.apiLogin);

    cy.get(loginSelectors.inputEmail).type(email);
    cy.get(loginSelectors.buttonNextStepOne).click();
    cy.get(loginSelectors.inputPassword).type(password);
    cy.get(loginSelectors.buttonLogin).click();
}); 
```