const express = require('express');

const router = express.Router();

const comprasController = require('../controllers/compra.controller');


/* //retorna todos os produtos
router.get('/', produtosController.findAll); */


//cria compra
router.post('/', comprasController.compra);


module.exports = router;