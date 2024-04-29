import { Request, Response } from 'express'
import { categoriaService } from '../service/categoria.service'

class categoriaController {

    async create(req: Request, res: Response) {
        const categoria = await new categoriaService().create(req.body)
        return res.json(categoria)
    }

    async findById(req: Request, res: Response) {
        const categoria = await new categoriaService().findById(req.params.id)
        return res.json(categoria)
    }

}

export default new categoriaController()