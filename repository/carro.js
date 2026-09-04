import carros from '../model/carro.js'

//INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryCarro {

    async Find() {
        const carros = await carros.findAll()

        return carros
    }

    async FindById(id) {
        const carroDetalhes = await carros.findByPk(id)

        return carroDetalhes
    }

    async Update() {

    }

    async Delete() {

    }

}

export default new RepositoryCarro()