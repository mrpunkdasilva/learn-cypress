import { faker } from '@faker-js/faker';

describe('Usuarios devem realizar o login', () => {
  let data;

  before(() => {
    cy.fixture('example').then((tempData) => {
      data = tempData;
    });
  });

  // Your test case
  it('Atravez da API da aplicação com sucesso', () => {
   cy.loginApi(faker.internet.email(), faker.internet.password());
  });
});