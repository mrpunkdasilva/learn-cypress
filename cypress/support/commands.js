// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require("cypress-xpath");
import loginSelectors from "../selectors/login.sel.cy";
Cypress.Commands.add("login", (email, password) => {
    cy.visit(urls.apiLogin);

    // O force faz com que seja clicado o button, ou seja, ele força o clique
    cy.xpath(loginSelectors.inputEmail).click({ force: true }).type(email);
    cy.xpath(loginSelectors.buttonNextStepOne).click({ force: true }).click();
    cy.xpath(loginSelectors.inputPassword).click({ force: true }).type(password);
    cy.xpath(loginSelectors.buttonLogin).click({ force: true });
});

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
