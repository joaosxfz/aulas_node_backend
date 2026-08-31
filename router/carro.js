import express from 'express'
import carros from '../repository/carro.js'

const router = express.Router()

//buscar todos
router.get("/buscar", (req, res) => {
    res.send({mensage: carros })

})

//buscar 1
router.get("/detalhe/:id", (req, res) => {
    const id = req.params.id

    const carro = carros.find(it => it.id === id)
    res.send({mensage : carro})
})

//criar
router.post("/criar", (req, res) => {
    const { id, marca, ano } = req.body
    if (!id || !marca || !ano) {
        // ! = Não tem
        res.send({ mensage: "Por favor informar todos os dados." })
        return
    }
    // push é armazenar/ arrey = armazena multiplos arquivos 
    carros.push({ id, marca, ano } )
    res.send({mensage : "Cadastrado com sucesso."})
})

//alterar
router.post("/alterar", (req, res) => {
    const id = req.body.id
    const produto = produtos
})

//deletar
router.post("/deletar", (req, res) => {
    const id = req.body.id

    carros.splice(it => it.id === id, 1)
    
    res.send({mensage : "Deletado"})
})

export default router