import RepositoryCarro from '../repository/carro.js'


class ServiceCarro {

    // Core- Regra De Negocio
    async Buscar() {
        return RepositoryCarro.Find
    }

    Detalhe(id) {
        // if (!id) {
        //     throw new Error("Favor informar o ID")
        // }
        // const carro = RepositoryCarro.find(it => it.id === id)
        // if (!carro) {
        //     throw new Error(`ID ${id} do carro não encontrado`)
        // }
        // return carro
    }
    // função ( paramatros, pode haver infinitos parametros, mais tenta deixar 5 a 6 paramatros )
    // da para reduzir parametros com Objetos
    async Criar(marca, ano) {
         if (!marca || !ano) {
             throw new Error("Favor informar todos os dados")
         }

         const carro = await RepositoryCarro.push.Criar(marca, ano)
         return carro

    }


    Alterar() { }

    Deletar(id) {
    //     if (!id) {
    //         throw new Error("Favor informar o ID")
    //     }
    //     RepositoryCarro.splice(it => it.id === id, 1)
    //     return id
    }

}
export default new ServiceCarro()