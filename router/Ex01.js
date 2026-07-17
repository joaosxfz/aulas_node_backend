import express from 'express'

const router = express.Router()

router.get("/api/v1/produto", (req, res) => {
    const { produto, preco } = req.query

    res.status(200).send({ message: `O produto ${produto} custa ${preco}` })
}) 

export default router