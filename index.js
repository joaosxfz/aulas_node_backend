import express from 'express'
import bancoDeDados from './repository/index.js'

const app = express()
app.use(express.json())

