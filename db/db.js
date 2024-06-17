
// BIBLIOTECAS/MODULOS UTILIZADOS
const Sequelize = require('sequelize');

//CRIANDO A CONFIGURAÇÃO DO BANCO DE DADOS
const sequelize = new Sequelize('postgres://dkndzsjq:V7bomQ7A1Qd0tydIWK2kge508maJh2M9@silly.db.elephantsql.com/dkndzsjq',{
    dialectModule: require('pg')
  });


/*
// BIBLIOTECAS/MODULOS UTILIZADOS
const Sequelize = require('sequelize');
//CRIANDO A CONFIGURAÇÃO DO BANCO DE DADOS
const sequelize = new Sequelize({
dialect: 'sqlite',
storage: './videoteca.sqlite'
})
*/


//TRATANDO POSSÍVEIS ERROS E AUTENTICANDO NO BANCO
try {
sequelize.authenticate();
console.log("Banco de dados conectado com sucesso!");
}
catch (erro) {
console.log("Erro ao conectar ao banco",erro);
}
module.exports = sequelize;



