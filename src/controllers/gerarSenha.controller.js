'use strict';

const Senha = require('../models/senha.model');

exports.createSenha = function(req, res) {
    const new_produtos = new Senha(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Senha.createSenha(new_produtos, function(err, produtos) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Employee added successfully!", data: produtos });
        });
    }
}