import RepositoryUsuario from '../repository/usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const segredo = 'mimos4';

class ServiceUsuario {

    // Core - Regra de Negócio

    async Buscar() {
        return RepositoryUsuario.find();
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID");
        }

        const usuario = await RepositoryUsuario.findById(id);

        if (!usuario) {
            throw new Error(`ID ${id} do usuario não encontrado`);
        }

        return usuario;
    }

    async Criar(email, senha) {
        if (!email || !senha) {
            throw new Error("Favor informar todos os dados");
        }

        const usuario = await RepositoryUsuario.Create(email, senha);

        return usuario;
    }

    async Alterar(id, email, senha) {
        if (!id || !email || !senha) {
            throw new Error("Favor informar os dados");
        }

        const usuarioAlterado = await RepositoryUsuario.Update(
            id,
            email,
            senha
        );

        return usuarioAlterado;
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID");
        }

        const usuario = await RepositoryUsuario.Delete(id);

        return usuario;
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválido");
        }

        const usuario = await RepositoryUsuario.findByEmail(email);

        if (!usuario) {
            throw new Error("Email ou senha inválida");
        }

        const senhaCorreta = await bcrypt.compare(
            String(senha),
            usuario.senha
        );

        if (!senhaCorreta) {
            throw new Error("Email ou senha inválido");
        }

        return jwt.sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            segredo,
            {
                expiresIn: 60 * 60
            }
        );
    }
}

export default new ServiceUsuario()