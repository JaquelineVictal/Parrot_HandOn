const usuario = require("../models/usuario");
const bcrypt = require('bcryptjs');

const usuarios = {
  listarUsuarios: async (req, res) => {
    try {
    const listarUsuarios =  await usuario.findAll({
      attributes: ["usuario_id", "nome", "email", "senha", "apresentacao"]
    });

    return res.status(200).json(listarUsuarios);
  } catch (error) {
    console.log(error);

    return res
      .status(404)
      .json(
        "erro na consulta, tente novamente mais tarde ou contate o suporte."
      );
  }},

  procurarUsuarioPorId: async (req, res) => {

    try {
      const {id} = req.params;
      const UsuarioPorId = await usuario.findByPk(id,
        {
          attributes: {
             exclude: ['senha']
          }
        })
      
      if(UsuarioPorId === null){
        return res.status(404).json({"error" : "ID não encontrado", status:"404"});
      }

      res.status(200).json(UsuarioPorId);
      } catch (error) {
        return res.status(500).json({"error" : error.message , status:"500"});  
      }
    },
  
    async novoUsuario(req, res){
      try{
        const {nome, email, senha, apresentacao} = req.body;

        if(!nome && !email && !senha && !apresentacao){
          return res.status(400).json({"error" : "Todos os campos são obrigatórios", status:"400"});
        }
    
        novaSenha = bcrypt.hashSync(senha, 10)
    
        const novoUsuarios = await usuario.create({
          nome, 
          email,
          senha: novaSenha,
          apresentacao,
        });
    
        const result = {
          id: novoUsuarios.usuario_id, 
          nome: novoUsuarios.nome, 
          email: novoUsuarios.email, 
          apresentacao: novoUsuarios.apresentacao
        };
    
        return res.status(201).json(result);
      }catch(error){
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },

    async atualizarUsuario(req, res){
      try{
        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;
        
        if(!nome && !email && !senha && !apresentacao){
          return res.status(400).json({"error" : "Todos os campos são obrigatórios", status:"400"});
        }
    
        novaSenha = bcrypt.hashSync(senha, 10)
    
        const usuarioAtualizado = await usuario.update({
            nome, 
            email,
            senha: novaSenha,
            apresentacao,
          },
          { 
            where: {usuario_id: id}
          },
        );

        const result = {
          id: usuarioAtualizado.usuario_id,
          nome: usuarioAtualizado.nome,
          email: usuarioAtualizado.email,
          apresentacao: usuarioAtualizado.apresentacao
        };

        return res.status(201).json(result);
      }catch(error){
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },


    async deletarUsuarios(req, res){
      try{
        const {id} = req.params;
        
        if(!id){
          return res.status(400).json({"error" : "Id obrigatório", status:"400"});
        }
    
         await usuario.destroy(
          
          { 
            where: {usuario_id: id}
          },
        );

        return res.status(204).send();
      }catch(error){
        return res.status(404).json({"error" : "ID não encontrado" , status:"404"});
      }
    },


};
module.exports = usuarios;