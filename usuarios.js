const usuarios = require("../models/psicologos");
const bcrypt = require('bcryptjs');
const usuario = require("../models/psicologos");


const usuarios = {
  listarUsuarios: async (req, res) => {
    try {
    const listarUsuarios =  await usuarios.findAll({
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
      const UsuarioPorId = await usuarios.findByPk(id,
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
    
        const novoUsuarios = await usuarios.create({
          nome, 
          email,
          senha: novaSenha,
          apresentacao,
        });
    
        const result = {id: novoUsuarios.usuario_id, nome: novoUsuarios.nome, email: novoUsuarios.email, apresentacao: novoUsuarios.apresentacao};
    
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
    
        const usuarioAtualizado = await usuarios.update({
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
          id: id,
          nome: nome,
          email: email,
          apresentacao: apresentacao
        };

        return res.status(201).json(result);
      }catch(error){
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },


    async deletarusuarios(req, res){
      try{
        const {id} = req.params;
        
        if(!id){
          return res.status(400).json({"error" : "Id obrigatório", status:"400"});
        }
    
         await usuarios.destroy(
          
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