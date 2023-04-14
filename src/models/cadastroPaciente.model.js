'use strict';

var dbConn = require('./../../config/db.config');

var Paciente = function(avaliar) {
    this.usuario = avaliar.usuario;
    this.nome = avaliar.nome;
    this.dataNascimento = avaliar.dataNascimento;
    this.idade = avaliar.idade;
    this.peso = avaliar.peso;
    this.altura = avaliar.altura;
    this.nomeMae = avaliar.nomeMae;
    this.Telefone = avaliar.Telefone;
    this.email = avaliar.email;

};

Paciente.cadastro = function(newEmp, result) {

    var ano_informado = newEmp.dataNascimento;
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = ano_informado.split('/');
    var diaNasc = parseInt(anoNascParts[0])
    var mesNasc = parseInt(anoNascParts[1])
    var anoNasc = parseInt(anoNascParts[2])
    var idade = anoAtual - anoNasc;

    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--;
            }
        }
    }
    var idadeAtual = idade;

    console.log(idadeAtual)

    dbConn.query("INSERT INTO cadastroPaciente SET usuario=?,nome=?,dataNascimento=?,idade=?,peso=?,altura=?,nomeMae=?,Telefone=?,email=? ", [newEmp.usuario, newEmp.nome, newEmp.dataNascimento, idadeAtual, newEmp.peso, newEmp.altura, newEmp.nomeMae, newEmp.Telefone, newEmp.email], function(err, res) {
        if (err) {
            //console.log("error: ", err);

            result(err, null);
        } else {
            //console.log(newEmp);
            result(null, res.insertId);
        }
    });

};

Paciente.findAll = function(result) {
    dbConn.query("Select * from cadastroPaciente", function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
        } else {
            //console.log('employees : ', res);
            result(null, res);
        }
    });
};

Paciente.findByIdAll = function(id, result) {
    console.log(id)
    dbConn.query("Select * from cadastroPaciente where usuario = ? ", id, function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(err, null);
        } else {
            console.log('Aquii!!!**********************')
            result(null, res);
        }
    });
};
/* controla a edição do cadastro e a avaliação */
Paciente.findByIdPaciente = function(id, result) {
    //console.log(id)
    dbConn.query("Select * from cadastroPaciente where nome = ? ", id, function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(err, null);
        } else {
            //console.log('Aquii!!!')
            result(null, res);
        }
    });
};

Paciente.updateCadastro = function(id, employee, result) {
    dbConn.query("UPDATE cadastroPaciente SET usuario=?,nome=?,dataNascimento=?,idade=?,nomeMae=?,Telefone=?,email=?  WHERE id = ?", [employee.usuario, employee.nome, employee.dataNascimento, employee.idade, employee.nomeMae, employee.Telefone, employee.email, id], function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Paciente.delete = function(id, result) {
    dbConn.query("DELETE FROM cadastroPaciente WHERE id = ?", [id], function(err, res) {
        if (err) {
            //console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Paciente