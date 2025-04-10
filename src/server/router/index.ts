import { Router } from "express";
import { StatusCodes} from "http-status-codes"

const rotas = Router()

rotas.get("/",(req,res)=>{
    res.send("Jesus Cristo")
})

rotas.post("/enviar", (req,res)=>{
    console.log(req.cookies)
   res.json(req.body) 
})

export {rotas}