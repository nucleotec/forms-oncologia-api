'use strict';

const Avaliar = require('../models/avaliar.model');


exports.create = function(req, res) {

    /* console.log(req.body); */

    const new_produtos = new Avaliar(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Avaliar.Avaliar(new_produtos, function(err, produtos) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Employee added successfully!", data: produtos });
        });
    }
};
exports.Protecao = function(req, res) {

    /* console.log(req.body); */

    const new_produtos = new Avaliar(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Avaliar.Protecao(new_produtos, function(err, produtos) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Employee added successfully!", data: produtos });
        });
    }
};

exports.findByIdPacienteAvaliacao = function(req, res) {
    Avaliar.findByIdPacienteAvaliacao(req.params.id, function(err, employee) {
        console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};