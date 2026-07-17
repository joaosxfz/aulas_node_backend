import express from 'express'
import ex01 from './router/Ex01.js'


const app = express()
app.use(express.json())



app.use('/api/v1/produto', ex01)

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})