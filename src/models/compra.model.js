'use strict';

var dbConn = require('./../../config/db.config');

var Compra = function(compra) {
    this.nome = compra.nome;
    this.responsaveis = compra.responsaveis;
    this.email = compra.email;
    this.telefone = compra.telefone;
    this.nome_produto = compra.nome_produto;
    this.Quantidade = compra.Quantidade;
    this.preco = compra.preco;
};

Compra.compraz = function(newEmp, result) {
    dbConn.query("INSERT INTO compra SET ?", newEmp, function(err, res) {
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(newEmp);
            result(null, res.insertId);
        }
    });

};

module.exports = Compra