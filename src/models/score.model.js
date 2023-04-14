'use strict';

var dbConn = require('./../../config/db.config');

var Score = function(avaliar) {
    this.usuario = avaliar.usuario;
    this.nome = avaliar.nome;
    this.data = avaliar.data;
    this.soma = avaliar.soma;
    this.media = avaliar.media;
    this.scoreFinal = avaliar.scoreFinal;

};



Score.findScoreUser = function(id, result) {
    console.log("aqui pelo usuario")
    dbConn.query("Select * from protecao where usuario = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('Aquii!!!')
            result(null, res);
        }
    });
};

Score.findById = function(id, result) {
    console.log(id)
    dbConn.query("Select * from protecao where nome = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            //console.log('Aquii!!!')
            result(null, res);
        }
    });
};

Score.findScore = function(id, result) {
    //console.log(id)
    dbConn.query("Select * from protecao where id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            //console.log('Aquii!!!')
            result(null, res);
        }
    });
};

/* Acesso admin -> coleta geral */
Score.findAllScore = function(result) {
    console.log("hello there")
    dbConn.query("Select * from protecao", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            //console.log('Aquii!!!')
            result(null, res);
        }
    });
};



module.exports = Score