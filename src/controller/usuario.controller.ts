import { Request, Response } from 'express'
import { usuarioService } from '../service/usuario.service'

class UsuarioController {

    async create(req: Request, res: Response) {
        const usuario = await new usuarioService().create(req.body)
        return res.json(usuario)
    }

    async findById(req: Request, res: Response) {
        const usuario = await new usuarioService().findById(req.params.id)
        return res.json(usuario)
    }

}

export default new UsuarioController()