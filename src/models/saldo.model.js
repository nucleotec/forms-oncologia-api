'use strict';

var dbConn = require('./../../config/db.config');


//Criando o objeto Employee
var Saldo = function(saldo) {
    this.nome = saldo.nome;
    this.creditoAdd = saldo.creditoAdd;
    this.dataCredito = saldo.dataCredito;
};


Saldo.create = function(newEmp, result) {
    dbConn.query("INSERT INTO saldoRelatorio SET ?", newEmp, function(err, res) {
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(newEmp);
            result(null, res.insertId);
        }
    });
};


Saldo.findAll = function(result) {
    dbConn.query("Select * from saldoRelatorio", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
Saldo.sumAll = function(result) {
    dbConn.query("Select sum(creditoAdd) as SaldoAdicionado from saldoRelatorio", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

module.exports = Saldo;