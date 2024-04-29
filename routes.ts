import { Router } from 'express'
import tarefaController from './src/controller/tarefa.controller'
import categoriaController from './src/controller/categoria.controller'
import usuarioController from './src/controller/usuario.controller'


const routes = Router()

routes.get('/health-check')
routes.post('/tarefa', tarefaController.create);
routes.get('/tarefa/usuario', tarefaController.listByUser);
routes.get('/tarefa', tarefaController.findById);
routes.put('/tarefa', tarefaController.update);
routes.delete('/tarefa', tarefaController.delete);

routes.get('/tarefa/categoria', tarefaController.listByCategoria);
routes.get('/tarefa/categoria', tarefaController.listByTarefaCompleta);
routes.get('/tarefa/categoria', tarefaController.listByTarefaPendente);
routes.get('/tarefa', tarefaController.listTarefaPeriodo);
routes.get('/tarefa/usuario', tarefaController.countTarefaByUser);
routes.get('/tarefa', tarefaController.findTarefaRecenteUsuario);

routes.get('/tarefa', tarefaController.mediaConclusao);
routes.get('/tarefa', tarefaController.findTarefaAntigaUsuario);
routes.get('/tarefa/agrupar-por-categoria', tarefaController.agruparTarefasCategoria);

export {routes}