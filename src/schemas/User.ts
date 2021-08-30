import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document{

    nome: string
    cpf: string
    cargoPretendido?: string
    dataNasc: string
    logradouro: string
    bairro: string
    cep: string
    email: string
    celular: string
    estadoCivil?: string
    sexo?: string
    cidade?: string
    telefone1?: string
    telefone2?: string
    contato?: string
    identidade?: string
    possuiVeiculo?: string
    categoriaCNH?: string
}

const UserSchema = new Schema({
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
    telefone1: { type: String, unique: false, required: false }, 
    telefone2: { type: String, unique: false, required: false }, 
    contato: { type: String, unique: false, required: false }, 
    identidade: { type: String, unique: true, required: false }, 
    possuiVeiculo: { type: String, unique: false, required: false }, 
    categoriaCNH: { type: String, unique: false, required: false }
}, {
    timestamps: true
})

export default model<UserInterface>('User', UserSchema)