import express from 'express'
import bancoDeDados from './repository/index.js'

const app = express()
app.use(express.json())

//buscar
app.get("/api/v1/produto", (req, res) => {
    const { produto, preco } = req.query

    res.status(200).send({ message: produto + preco })
})

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})