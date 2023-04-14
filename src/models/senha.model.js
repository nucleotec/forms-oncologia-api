'use strict';

var dbConn = require('../../config/db.config');

//Criando o objeto Employee
var Senha = function(se) {
    this.senha = se.senha;
    this.id = se.id

};


Senha.createSenha = function(newEmp, result) {
    dbConn.query("INSERT INTO senhagerada SET ?", newEmp, function(err, res) {
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(newEmp);
            result(null, res.insertId);
        }
    });
};

module.exports = Senha;