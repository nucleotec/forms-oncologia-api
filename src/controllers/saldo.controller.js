'use strict';

const saldo = require('../models/saldo.model');

exports.findAll = function(req, res) {
    saldo.findAll(function(err, produtos) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', produtos);
        res.send(produtos);
    });
};
exports.sumAll = function(req, res) {
    saldo.sumAll(function(err, produtos) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', produtos);
        res.send(produtos);
    });
};
exports.create = function(req, res) {
    const new_produtos = new saldo(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        saldo.create(new_produtos, function(err, produtos) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Employee added successfully!", data: produtos });
        });
    }
};