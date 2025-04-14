import { app } from "./server/servidor";



app.listen(process.env.PORT || 5050, ()=>{
    console.log(`Servidor está rodando muito bem na porta npm ${process.env.PORT || 5050}!`)
})