import { Schema, model } from 'mongoose';

const categoriaSchema = new Schema({
    id: Number,
    nome: String,
    cor: String
});


const categoria = model('categoria', categoriaSchema);

export {categoria};