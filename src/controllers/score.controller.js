'use strict';

const Score = require('../models/score.model');



exports.findScoreUser = function(req, res) {
    Score.findScoreUser(req.params.id, function(err, employee) {
        console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.findById = function(req, res) {
    Score.findById(req.params.id, function(err, employee) {
        console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.findScore = function(req, res) {
    Score.findScore(req.params.id, function(err, employee) {
        console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};
exports.findAllScore = function(req, res) {
    /* Score.findAllScore(req.params.id, function(err, employee) { */
    Score.findAllScore(function(err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};