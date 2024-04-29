import {categoria} from '../schema/categoria.schema'

export class categoriaService {
    async create(categoria: any) {
        const createdCategoria = await categoria.create(categoria)

        return createdCategoria
    }

    async findById(id: any) {
        const findedCategoria = await categoria.findById(id)
        return findedCategoria
    }

}