describe('Usuarios devem realizar o login', () => {
  let data;

  before(() => {
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