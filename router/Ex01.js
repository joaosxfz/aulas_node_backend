import express from 'express'

const router = express.Router()

//1. Peça ao usuário o nome de um produto e o preço. 
// Mostre uma mensagem dizendo quanto custa o produto.
router.get("/", (req, res) => {
    const { produto, preco } = req.query

    res.status(200).send({ message: `O produto ${produto} custa ${preco}` })
}) 

export default router