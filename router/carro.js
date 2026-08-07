import express from 'express'
import carros from '../repository/carro.js'




const router = express.Router()

// buscar todos
router.get("/buscar", (req, res) => { 
        res.send({ mensagem: carros })
})

// buscar 1
router.get("/detalhe/:id", (req, res) => {
    const id = req.params.id

    const carro = carros.find(it => it.id === id)

    res.send({ mensagem: carro})
})

// criar
router.post("/criar", (req, res) => {
    const { id, marca, ano } = req.body

    if (!id || !marca || !ano) {
        res.send({ messagem: "Favor informar todos os dados" })
        return
    }

    carros.push({ id, marca, ano })
    res.send({ mensagem: "Cadastrado com sucesso" })
})

// alterar
router.post("/alterar", (req, res) => { })

//deletar
router.post("/deletar", (req, res) => {
    const id = req.body.id

    carros.splice(it => it.id === id, 1)

    res.send({ mensagem: "Deletado"})
})


export default router