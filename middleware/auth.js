// middleware -> auth.js
// npm i bcrypt jsonwebtoken
import jwt from "jsonwebtoken";

const segredo = 'mimos4'

export default async function authMiddleware(req, res, next) {
    try {
        //verificar se o JWT é valido
        const token = req.headers['authorization']
        if (!token) {
            throw new Error()
        }
        console.log(token)

        const decoded = jwt.verify(token, segredo)
        console.log(decoded)
        next()

    }
    catch (error) {
        res.status(403).send({
            message: "Usuario ou senha inválido"
        })
    }
}