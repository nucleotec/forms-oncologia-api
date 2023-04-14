const express = require('express');

const router = express.Router();

const avaliarController = require('../controllers/avaliar.controller');


/* //retorna todos os creditos incluidos
router.get('/', saldoController.findAll);

//retorna soma dos creditos incluidos
router.get('/total', saldoController.sumAll);
 */
//cria os saldos
router.post('/', avaliarController.create);
//cria os saldos
router.post('/protecao', avaliarController.Protecao);

router.get('/avaliacaoPaciente/:id', avaliarController.findByIdPacienteAvaliacao);

module.exports = router;