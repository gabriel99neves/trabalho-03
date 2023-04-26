
const express  =  require('express');
const router =  express.Router( );
const conexao = require( './servidor.js' ) ;


router.get( '/cliente/tipos' ,  ( req ,  res )  =>  {
    const  sql  =  'SELECT * FROM tipo_cliente' ;
    return conexao.query( sql , ( err , result)  =>  {
      if  ( err )  {
        console.log( `Erro ao buscar tipos de clientes no banco de dados: ${ err . message } ` ) ;
        return  res.status (500).send ( 'Erro interno do servidor' ) ;
      }else  {
        console.log( `Tipos de clientes encontrados: ${JSON.stringify(result)}`) ;
        return res.status (200).send(result) ;
      }
    } ) ;
  } ) ;


  module.exports = router;