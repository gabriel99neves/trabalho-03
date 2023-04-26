const express  =  require('express');
const router =  express.Router( );
const conexao = require( './servidor.js' ) ;


router.get('/cliente/buscar/email/:valor', (req, res) => {
    const { valor } = req.params;
    let sql;
     sql = `SELECT * FROM cliente WHERE email = ?`;
      conexao.query(sql, [valor], (err, result) => {
      if (err) {
        console.log(`Erro ao buscar dados no banco de dados: ${err.message}`);
        return res.status(500).send('Erro interno do servidor');
      }
      console.log(`Dados encontrados: ${JSON.stringify(result)}`);
      return res.status(200).send(result);
    });
  });


  module.exports = router;