import express from 'express'
import bancoDeDados from './repository'

//server ou app

const app = express()
//path params - router
//app.get("/api/v1/somar", (req, res) => {
    // query params 
//    const num1 = Number(req.query.num1)
//    const num2 = Number(req.query.num2)
//    const resultado = num1 + num2

//    res.send({ resultado })
//}) 

// aqui em diante

// metodo GET da função de subtrair usando QueryParam
// Com numero1 e numero2 ou num1 e num2

app.get("/api/pessoa/:id" , (req, res) => {

    bancoDeDados.find()


    res.send({ message: "Hello World" })
})


app.get("/api/pessoa" , (req, res) => {
    const id = req.query.id
    const name = req.query.name

    bancoDeDados.push

    res.send({ message: "pessoa criada com sucesso!!!" })
})

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})