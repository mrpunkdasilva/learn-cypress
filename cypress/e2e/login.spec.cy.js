describe('Usuarios devem realizar o login', () => {
  
  let data;
  
  before(() => {
    cy.fixture("example").then(( tData ) => {
      data = tData
    })
  });
  
  
  it('Atravez da página da aplicação com sucesso', () => {
    cy.visit('http://localhost:5173/pages/auth/login.html');
    
    cy.get("input[id='email']").type(data.email);
    cy.get("div[aria-label='1 / 2'].swiper-slide.swiper-slide-active button ").click();
    cy.get("input#password").type(data.password);
    cy.get("button#btnLogin").click();
  });

});