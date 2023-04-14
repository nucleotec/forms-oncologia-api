const express = require('express');

const router = express.Router();

const produtosController = require('../controllers/prod.controller');


//retorna todos os produtos
router.get('/', produtosController.findAll);


//cria os produtos
router.post('/', produtosController.create);


//faz o update no produto
router.put('/:id', produtosController.updateProduto);

//retorna um unico dado por id

router.get('/:id', produtosController.findById);

//deleta o dado pelo referido id
router.delete('/:id', produtosController.delete);

module.exports = router;