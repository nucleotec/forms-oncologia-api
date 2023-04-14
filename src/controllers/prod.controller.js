'use strict';

const produtos = require('../models/produtos.model');

exports.findAll = function(req, res) {
    produtos.findAll(function(err, produtos) {
        //console.log('controller')
        if (err)
            res.send(err);
        //console.log('res', produtos);
        res.send(produtos);
    });
};

exports.create = function(req, res) {
    const new_produtos = new produtos(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        produtos.create(new_produtos, function(err, produtos) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Employee added successfully!", data: produtos });
        });
    }
};

exports.updateProduto = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        produtos.updateProduto(req.params.id, new produtos(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};

exports.findById = function(req, res) {
    produtos.findById(req.params.id, function(err, employee) {
        //console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.delete = function(req, res) {
    produtos.delete(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};