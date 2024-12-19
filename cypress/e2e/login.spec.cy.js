describe('Usuarios devem realizar o login', () => {
  
  let data;
  
  before(() => {
    cy.fixture("example").then(( tData ) => {
      data = tData
    })
  });
  
  
  it('Atravez da página da aplwicação com sucesso', () => {
    cy.login(data.email, data.password);
  });

});