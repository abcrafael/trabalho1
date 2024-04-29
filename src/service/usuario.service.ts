import { usuario} from '../schema/usuario.shema'

export class usuarioService {
    async create(usuario: any) {
        const createdUsuario = await usuario.create(usuario)

        return createdUsuario
    }

    async findById(id: any) {
        const findedUsuario = await usuario.findById(id)
        return findedUsuario
    }

}