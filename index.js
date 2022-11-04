import express from 'express';
import 'dotenv/config';
//import database from './database.json' assert { type: "json" };
import PokeRouter from './src/routes.js'
import cors from 'cors'

const server = express()
const port = process.env.PORT || 3000;

server.use(cors())
server.use(express.json())
server.use('/pokemon', PokeRouter)

server.listen(port, () => console.log(`server listens on http://localhost:${port}`))

