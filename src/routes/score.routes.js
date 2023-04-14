const express = require('express');

const router = express.Router();

const scoreController = require('../controllers/score.controller');


/* //retorna todos os creditos incluidos
router.get('/', saldoController.findAll);

//retorna soma dos creditos incluidos
router.get('/total', saldoController.sumAll);
 */

//pega os scores 
router.get('/:id', scoreController.findScore);

//pega os scores gerais por usuario
router.get('/user/:id', scoreController.findScoreUser);/* medico X paciente*/

//Utilizado para capturar o gráfico
router.get('/paciente/score/:id', scoreController.findById);

/* Acesso admin -> coleta geral */
router.get('/', scoreController.findAllScore);



module.exports = router;