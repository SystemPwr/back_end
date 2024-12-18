const mongoose = require('mongoose');

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://systempweriteam:r15dznm4quC80FnU@cluster0.r5lzt.mongodb.net/Appturismo", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

var Schema = mongoose.Schema;


const pontos_turisticos = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String},
  cnpj: {type: String},
  localizacao: { type: String, required: true },
  dataCadastro: { type: Date, default: Date.now }
});


const PontoTuristicoModel = mongoose.model('pontos_turisticos', pontos_turisticos);

module.exports = { PontoTuristicoModel };
