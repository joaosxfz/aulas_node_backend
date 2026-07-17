import express from 'express'

const router = express.Router()

//2. Peça o comprimento e a largura de um terreno. 
// Calcule e mostre a quantidade de metros quadrados.
router.get("/", (req, res) => {
    const { comprimento, largura } = req.query
    const resultado = Number(comprimento) * Number(largura)

    res.status(200).send({ message: `A área possui ${resultado} m por quadrado` })
}) 

export default router