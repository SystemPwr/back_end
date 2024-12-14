
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://systempweriteam:r15dznm4quC80FnU@cluster0.r5lzt.mongodb.net', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const cliente = new Schema ({

    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    email      : { type:String, required: true}
})

const ClienteModel = mongoose.model('clientes', cliente);


module.exports = {ClienteModel}