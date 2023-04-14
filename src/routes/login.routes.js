const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login.controller');


//lê os dados e faz o login caso existir
router.post('/', loginController.login);

//cria o usuario
router.post('/create', loginController.create);

//cria o usuario
router.get('/user/getall', loginController.findAll);

//retorna um unico dado por id
router.get('/user/get/:id', loginController.findById);

//faz o update dos dados pelo referido id
router.put('/user/update/:id', loginController.update);

//faz o update dos dados pelo referido id
router.delete('/user/delete/:id', loginController.delete);

module.exports = router;