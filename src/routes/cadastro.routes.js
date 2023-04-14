const express = require('express');

const router = express.Router();

const pacienteController = require('../controllers/cadastroPaciente.controller');


//retorna todos os creditos incluidos
router.get('/', pacienteController.findAll);

//retorna todos os dados referente ao usuario logado -> medico X paciente
router.get('/paciente/userid/:id', pacienteController.findByIdAll);

//cria os saldos
router.post('/', pacienteController.create);

//busca o paciente
router.get('/:id', pacienteController.findByIdPaciente);

//faz o update do cadastro do paciente
router.put('/:id', pacienteController.update);

//faz a exclusão do cadastro do paciente
router.delete('/:id', pacienteController.delete);

module.exports = router;