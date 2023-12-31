import express from 'express'
import statusCode from './routes/status.route'
import usersRoute from './routes/users.route'


const app = express()

//Configuração da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(usersRoute)
app.use(statusCode)

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta http://localhost:3000')
})

