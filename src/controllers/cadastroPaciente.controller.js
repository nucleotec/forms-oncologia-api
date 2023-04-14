'use strict';

const Paciente = require('../models/cadastroPaciente.model');

exports.findAll = function(req, res) {
    Paciente.findAll(function(err, employee) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', employee);
        res.send(employee);
    });
};

exports.findByIdAll = function(req, res) {
    Paciente.findByIdAll(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.findByIdPaciente = function(req, res) {
    Paciente.findByIdPaciente(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.create = function(req, res) {
    const new_produtos = new Paciente(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Paciente.cadastro(new_produtos, function(err, produtos) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Employee added successfully!", data: produtos });
        });
    }
};

exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Paciente.updateCadastro(req.params.id, new Paciente(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Paciente.delete(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};