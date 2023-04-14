'use strict';

var dbConn = require('./../../config/db.config');

//Criando o objeto Employee

var produtos = function(produtos) {
    this.codigo = produtos.codigo;
    this.nome_produto = produtos.nome_produto;
    this.descricao = produtos.descricao;
    this.preco = produtos.preco;
    this.tipo = produtos.tipo;
    this.saldoInicial = produtos.saldoInicial;
};

produtos.create = function(newEmp, result) {
    dbConn.query("INSERT INTO produtos SET ?", newEmp, function(err, res) {
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(newEmp);
            result(null, res.insertId);
        }
    });
};

produtos.updateProduto = function(id, employee, result) {
    dbConn.query("UPDATE produtos SET codigo=?,nome_produto=?,descricao=?,preco=?,tipo=?,saldoInicial=? WHERE id_produto = ?", [employee.codigo, employee.nome_produto, employee.descricao, employee.preco, employee.tipo, employee.saldoInicial, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

produtos.findById = function(id, result) {
    dbConn.query("Select * from produtos where id_produto = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

produtos.findAll = function(result) {
    dbConn.query("Select * from produtos", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

produtos.delete = function(id, result) {
    dbConn.query("DELETE FROM produtos WHERE id_produto = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


module.exports = produtos;