import {tarefa} from '../schema/tarefa.schema'
import { usuario } from '../schema/usuario.shema'
import { categoria } from '../schema/categoria.schema'

export class tarefaService {
    async create(tarefa: any) {
        const createdTarefa = await tarefa.create(tarefa)

        return createdTarefa
    }

    async findById(id: any) {
        const findedTarefa= await tarefa.findById(id)
        return findedTarefa
    }

    async listByUser(userId: string) {
        const tarefas = await tarefa.find({ usuarioTarefa: userId });
        return tarefas;
    }

    async update(userId: string, tarefa: any) {
        const tarefas = await tarefa.findByIdAndUpdate({ id: userId}, tarefa);
        return tarefas;
    }

    async delete(id: string) {
        const tarefas = await tarefa.findByIdAndDelete(id)
        return 'Tarefa Removida'
    }

    async listByCategoria(categoriaId: string) {
        const tarefas = await tarefa.find({ categoriaId: categoriaId });
        return tarefas;
    }

    async listByTarefaCompleta() {
        const tarefas = await tarefa.find({ status: 'concluída' });
        return tarefas;
    }

    async listByTarefaPendente() {
        const tarefas = await tarefa.find({ status: 'pendente' });
        return tarefas;
    }

    async countTarefaByUser(userID: string) {
        const tarefas = await tarefa.find({ usuarioTarefa: userID });
        return tarefas;
    }

    async listTarefaPeriodo(dataCriacao: String, dataConclusao: String) {
        const tarefas = await tarefa.find({ dataConclusao: { $gte: dataCriacao, $lte: dataConclusao } });
        return tarefas;
    }

    async findTarefaRecenteUsuario(userId: string) {
        const tarefas = await tarefa.findOne({ usuarioTarefa: userId }).sort({ dataCriacao: -1 });        
        return tarefas;
    }

    async findTarefaAntigaUsuario(userId: string) {
        const tarefas = await tarefa.findOne({ usuarioTarefa: userId }).sort({ dataCriacao: 1 });        
        return tarefas;
    }
    
    async mediaConclusao() {
        const tarefas = await tarefa.countDocuments({ status: 'concluída' });
        return tarefas;
    }

    async agruparTarefasCategoria() {
        const tarefas = await tarefa.aggregate([{$group:{_id: '$categoria'}}]);
        return tarefas;
    }

}