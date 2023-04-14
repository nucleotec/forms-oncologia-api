const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/employee.controller');

//retorna todos os dados
router.get('/', employeeController.findAll);

//retorna todos os dados referente ao usuario logado
router.get('/userid/:id', employeeController.findByIdAll);

//faz a soma de todos os saldos dos alunos para mostrar na tela  
router.get('/saldo', employeeController.SumAllInd);

//cria os dados
router.post('/', employeeController.create);

//ecaminha o email
router.post('/email', employeeController.email);

//ecaminha o email de alteração no credito
router.post('/emailCredito', employeeController.emailCredito);

//retorna um unico dado por id
router.get('/:id', employeeController.findById);

//faz o update dos dados pelo referido id
router.put('/:id', employeeController.update);

//deleta o dado pelo referido id
router.delete('/:id', employeeController.delete);

//faz o update no credito do aluno
router.put('/updateCreditoAluno/:id', employeeController.updateCreditoAluno);



module.exports = router;