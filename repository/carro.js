import carros from '../model/carro.js'

//INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryCarro {

    async Find() {
        const carrosEncontrados = await carros.findAll()

        return carrosEncontrados
    }

    async Create() {

    }

    async Update() {

    }

    async Delete() {

    }

}

export default new RepositoryCarro()