"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotas = void 0;
const express_1 = require("express");
const rotas = (0, express_1.Router)();
exports.rotas = rotas;
rotas.get("/", (req, res) => {
    res.send("Jesus Cristo");
});
rotas.post("/enviar", (req, res) => {
    console.log(req.cookies);
    res.json(req.body);
});
