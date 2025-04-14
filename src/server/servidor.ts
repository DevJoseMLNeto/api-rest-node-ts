import express from "express"
import { rotas } from "./router"
import 'dotenv/config';

const app = express()
app.use(express.json())
app.use(rotas)





export {app}