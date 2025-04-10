import express from "express"
import { rotas } from "./router"

const app = express()
app.use(express.json())
app.use(rotas)





export {app}