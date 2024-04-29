import { Request, Response } from 'express'
import { tarefaService } from '../service/tarefa.service'

class TarefaController {

    async create(req: Request, res: Response) {
        const tarefa = await new tarefaService().create(req.body)
        return res.json(tarefa)
    }

    async findById(req: Request, res: Response) {
        const tarefa = await new tarefaService().findById(req.params.id)
        return res.json(tarefa)
    }

    async listByUser(req: Request, res: Response) {
        const tarefa = await new tarefaService().listByUser(req.params.userID)
        return res.json(tarefa)
    }

    async update(req: Request, res: Response) {
        const tarefa = await new tarefaService().update(req.params.id, req.body)
         return res.json(tarefa)
    }

    async delete(req: Request, res: Response) {
        const tarefa = await new tarefaService().delete(req.params.id)
         return res.json(tarefa)
    }

    async listByCategoria(req: Request, res: Response) {
        const tarefa = await new tarefaService().listByCategoria(req.params.categoriaId)
        return res.json(tarefa)
    }

    async listByTarefaCompleta(req: Request, res: Response) {
        const tarefa = await new tarefaService().listByTarefaCompleta()
        return res.json(tarefa)
    }

    async listByTarefaPendente(req: Request, res: Response) {
        const tarefa = await new tarefaService().listByTarefaPendente()
        return res.json(tarefa)
    }

    async countTarefaByUser(req: Request, res: Response) {
        const tarefa = await new tarefaService().countTarefaByUser(req.params.userID)
        return res.json(tarefa)
    }

    async listTarefaPeriodo(req: Request, res: Response) {
        const tarefa = await new tarefaService().listTarefaPeriodo(req.params.dataCriacao, req.params.dataConclusao)
        return res.json(tarefa)
    }
   
    async findTarefaRecenteUsuario(req: Request, res: Response) {
        const tarefa = await new tarefaService().findTarefaRecenteUsuario(req.params.userId)
        return res.json(tarefa)
    }

    async findTarefaAntigaUsuario(req: Request, res: Response) {
        const tarefa = await new tarefaService().findTarefaAntigaUsuario(req.params.userId)
        return res.json(tarefa)
    }

    async mediaConclusao(req: Request, res: Response) {
        const tarefa = await new tarefaService().mediaConclusao()
        return res.json(tarefa)
    }

    async agruparTarefasCategoria(req: Request, res: Response) {
        const tarefa = await new tarefaService().agruparTarefasCategoria()
        return res.json(tarefa)
    }

}

export default new TarefaController()