# Learn Cypress

## Start
Crie uma pasta e vá até ela:

`md learn-cypress`
`cd learn-cypress`

Para iniciar instalamos o cypress, para isso é melhor ir no site ofiial e escolher a forma de instalação do seu gerenciador de pacotes
  
> Resources: [clique aqui](https://docs.cypress.io/app/get-started/install-cypress)

Dentro da pasta execute (para isso você deve ter instalado o NodeJS):

`npm install cypress --save-dev`


## Run
Depois de instalado rodamos:

> npx cypress open

Vai abrir a interface do Cypress e então podemos escolher usa-lo.
Assim que ele abrir: 
- Aperte em "Continue"
- Selecione "E2E" (Esse é o tipo de tese end two end)
- Agora selecione o navegador que aparecer, dependendo pode aparecer Chrome ou Firefox
- Agora podemos criar nossos **specs**, selecione para criar um novo **spec**  e nomeie como `login.spec.cy.js`
