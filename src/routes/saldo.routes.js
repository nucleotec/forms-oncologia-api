const express = require('express');

const router = express.Router();

const saldoController = require('../controllers/saldo.controller');


//retorna todos os creditos incluidos
router.get('/', saldoController.findAll);

//retorna soma dos creditos incluidos
router.get('/total', saldoController.sumAll);

//cria os saldos
router.post('/', saldoController.create);

module.exports = router;