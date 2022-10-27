const express = require("express");
const publicacoes = require("../controller/publicacoes");
//const usuarios = require("../controller/usuarios");
const routes = express.Router();


//post(/usuarios)
routes.post("/usuarios", usuarios.novoUsuario);
//get(/usuarios/:id)
routes.get("/usuarios/:id", usuarios.procurarUsuarioPorId);
//delete(/usuarios/:id)
routes.delete("/usuarios/:id", usuarios.deletarUsuarios);
//put(/usuarios)
routes.put("/usuarios", usuarios.atualizarUsuario);
//get(/usuarios)
routes.get("/usuarios", usuarios.listarUsuarios);

//get(/publicacoes/:id)
routes.get("/publicacoes/:id", publicacoes.procurarPublicacoesPorId);
//get(/publicacoes)
routes.get("/publicacoes", publicacoes.listarPublicacoes);
//delete(/publicacoes/:id)
routes.delete("/publicacoes/:id", publicacoes.deletarPublicacoes);
//post(/publicacoes)
routes.post("/publicacoes", publicacoes.novaPublicacao);
//put(/publicacoes)
routes.put("/publicacoes", publicacoes.atualizarPublicacoes);


module.exports = routes;