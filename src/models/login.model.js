'use strict';

var dbConn = require('./../../config/db.config');
const md5 = require('md5');

//Criando o objeto Employee

var Login = function(login) {
    this.id = login.id
    this.usuario = login.usuario;
    this.senha = login.senha;
    this.perfil = login.perfil;
};


Login.loginUser = function(newEmp, result) {

    var senhaCript = md5(newEmp.senha)

    console.log(senhaCript)

    dbConn.query("SELECT * FROM usuarios WHERE usuario=? AND senha=?", [newEmp.usuario, senhaCript], function(err, res) {

        console.log(res);

        if (res.length > 0) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(newEmp);
                result(null, res);
            }
        }
    });
};

Login.create = function(newEmp, result) {
    var senhaCript = md5(newEmp.senha)
    dbConn.query("SELECT * FROM usuarios where usuario=?", newEmp.usuario, function(err, res) {

        console.log(res);

        if (res.length > 0) {
            console.log('Usuário Existente')


        } else if (res.length <= 0) {

            /* console.log('Vazioooo') */

            dbConn.query("INSERT INTO usuarios SET usuario=?, senha=?, perfil=?", [newEmp.usuario, senhaCript, newEmp.perfil], function(err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                } else {
                    console.log(newEmp);
                    result(null, res.insertId);
                }
            });
        }

    });
};

Login.findAll = function(result) {
    dbConn.query("Select * from usuarios", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Login.findById = function(id, result) {
    dbConn.query("Select * from usuarios where id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Login.update = function(id, employee, result) {
    dbConn.query("UPDATE usuarios SET usuario=?,senha=?,perfil=? WHERE id = ?", [employee.usuario, employee.senha, employee.perfil, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Login.delete = function(id, result) {
    dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Login;