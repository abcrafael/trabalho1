import { Schema, model } from 'mongoose';

const tarefaSchema = new Schema({
    id: Number,
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
    status: { type: String, enum: ['pendente', 'em andamento', 'concluída'] },
    usuarioTarefa: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String
}, {
    timestamps: true
});

const tarefa = model('tarefa', tarefaSchema);

export { tarefa };