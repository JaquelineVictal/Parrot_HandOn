const publicacao = require("../models/publicacao");
const bcrypt = require('bcryptjs');

//const mockPublicacoes = "aqui retornará a lista de publicações";

const publicacoes = {
  listarPublicacoes: async (req, res) => {
    try {
    const listarPublicacoes =  await publicacao.findAll({
      attributes: ["publicacoes_id", "nome", "email", "senha", "apresentacao"]
    });

    return res.status(200).json(listarPublicacoes);
    //return res.status(200).json(mockPublicacoes);
  } catch (error) {
    console.log(error);

    return res
      .status(404)
      .json(
        "erro na consulta, tente novamente mais tarde ou contate o suporte."
      );
  }},

   procurarPublicacoesPorId: async (req, res) => {

    try {
      const {id} = req.params;
      const procurarPublicacoesPorId = await publicacao.findByPk(id,
        {
          attributes: {
             exclude: ['senha']
          }
        }
      );
      
      if(procurarPublicacoesPorId === null){
      //if(id === null){
        return res.status(404).json({"error" : "ID não encontrado", status:"404"});
      }

      return res.status(200).json(procurarPublicacoesPorId);
      //return res.status(200).json(`retornando a publicação do ${id}`);
      } catch (error) {
        return res.status(500).json({"error" : error.message , status:"500"});  
      }
    },
  
    async novaPublicacao(req, res){
      try{
        const {nome, email, senha, apresentacao} = req.body;

        if(!nome && !email && !senha && !apresentacao){
          return res.status(400).json({"error" : "Todos os campos são obrigatórios", status:"400"});
        }
    
        novaSenha = bcrypt.hashSync(senha, 10)
    
        const novaPublicacao = await publicacao.create({
          nome, 
          email,
          senha: novaSenha,
          apresentacao,
        });
    
        // const novaPublicacao = {
        //   publicacao_id: 1, nome, email, apresentacao
        // };

        const result = {
          id: novaPublicacao.publicacao_id, 
          nome: novaPublicacao.nome, 
          email: novaPublicacao.email, 
          apresentacao: novaPublicacao.apresentacao
        };
    
        return res.status(201).json(result);
      }catch(error){
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },

    async atualizarPublicacoes(req, res){
      try{
        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;
        
        if(!nome && !email && !senha && !apresentacao){
          return res.status(400).json({"error" : "Todos os campos são obrigatórios", status:"400"});
        }
    
        novaSenha = bcrypt.hashSync(senha, 10)
    
        const publicacaoAtualizada = await publicacao.update({
            nome, 
            email,
            senha: novaSenha,
            apresentacao,
          },
          { 
            where: {publicacao_id: id}
          },
        );

        // const publicacaoAtualizada = {
        //   publicacao_id: 2, nome, email, apresentacao
        // };

        const result = {
          id: publicacaoAtualizada.publicacao_id, 
          nome: publicacaoAtualizada.nome,
          email: publicacaoAtualizada.email,
          apresentacao: publicacaoAtualizada.apresentacao
        };

        return res.status(201).json(result);
      }catch(error){
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },


    async deletarPublicacoes(req, res){
      try{
        const {id} = req.params;
        
        if(!id){
          return res.status(400).json({"error" : "Id obrigatório", status:"400"});
        }
    
         await publicacao.destroy(
          
          { 
            where: {publicacao_id: id}
          },
        );

        return res.status(204).send();
      }catch(error){
        return res.status(404).json({"error" : "ID não encontrado" , status:"404"});
      }
    },


};
module.exports = publicacoes;