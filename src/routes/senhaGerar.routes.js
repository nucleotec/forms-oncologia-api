const express = require('express');

const router = express.Router();

const senhaController = require('../controllers/gerarSenha.controller');


//cria a senha
router.post('/', senhaController.createSenha);

/* //cria o usuario
router.post('/create', loginController.create); */



module.exports = router;