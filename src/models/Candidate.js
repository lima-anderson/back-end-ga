const mongoose = require('../database');

const CandidatoSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true }, 
    cpf: { type: String, unique: true, required: true }, 
    cargoPretendido: { type: String, unique: false, required: false }, 
    dataNasc: { type: String, unique: false, required: true }, 
    logradouro: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true }, 
    email: { type: String, unique: true, required: true }, 
    celular: { type: String, unique: false, required: true }, 
    estadoCivil: { type: String, unique: false, required: false }, 
    sexo: { type: String, unique: false, required: false }, 
    cidade: { type: String, unique: false, required: false }, 
    phone: { type: String, unique: false, required: false }, 
    rg: { type: String, unique: true, required: false }, 
    possuiVeiculo: { type: String, unique: false, required: false }, 
    possuiCNH: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidato', CandidatoSchema);