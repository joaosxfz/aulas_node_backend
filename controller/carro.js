import ServiceCarro from '../service/carro.js'

class ControllerCarro {


    // Recebimento e a Saida das informações
    async Buscar(_, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.status(200).send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = ServiceCarro.Detalhe(id)

            res.status(200).send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { id, marca, ano } = req.body

            await ServiceCarro.Criar(id, marca, ano)

            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            ServiceCarro.Alterar
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.body.id

            ServiceCarro.Deletar(id)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}

export default new ControllerCarro()