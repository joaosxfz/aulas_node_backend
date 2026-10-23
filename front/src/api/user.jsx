import api from './api'

//buscar

//buscarUm

// criar

// alterar

// deletar

export const loginUser = async (email, password) => {
    const body = { email, password}
    console.log("oi")
    const response = await api.post('/v1/user/login', body, {
        headers: { 'Content-Type': 'application/json'}
    })

    return response.data
}