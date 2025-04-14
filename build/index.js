"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servidor_1 = require("./server/servidor");
servidor_1.app.listen(process.env.PORT || 5050, () => {
    console.log(`Servidor está rodando muito bem na porta npm ${process.env.PORT || 5050}!`);
});
