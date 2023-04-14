'use strict';

var dbConn = require('./../../config/db.config');
const nodemailer = require("nodemailer");
const details = require("./details.json");

//Criando o objeto Employee
var Employee = function(employee) {
    this.usuario = employee.usuario;
    this.nome = employee.nome;
    this.responsaveis = employee.responsaveis;
    this.email = employee.email;
    this.telefone = employee.telefone;
    this.sexo = employee.sexo;
    this.nascimento = employee.nascimento;
    this.parentesco = employee.parentesco;
    this.nivelescola = employee.nivelescola;
    this.turma = employee.turma;
    this.serie = employee.serie;
    this.turno = employee.turno;
    this.credito = employee.credito;
};





Employee.create = function(newEmp, result) {
    dbConn.query("INSERT INTO employees SET ?", newEmp, function(err, res) {
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            console.log(newEmp);
            result(null, res.insertId);
        }
    });
};

Employee.createSenha = function(newEmp, result) {
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

Employee.email = async(newEmp, result) => {

    console.log(newEmp.nome);
    console.log(newEmp.email);

    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: details.email,
            pass: details.password
        }
    });
    let info = await transport.sendMail({
        from: "softwaresgabriel1@gmail.com",
        to: newEmp.email,
        subject: "Cantina Univás - (Cadastro de Aluno)",
        text: newEmp.nome,
        html: "<div style='text-align: center;'><h1 style='color: red;font-size: 40px'>Que Legallll!</h1><h3 style='color: blue;font-size: 40px'>Sejá Bem vindo " + newEmp.nome + ", a Cantina da Tucha</h3><div><p style='color: blue; font-size: 30px'>Confira seu dados abaixo.Qualquer coisa é só falar pra gente 😁 .</p><p style='color: blue; font-size: 20px'>Nome: " + newEmp.nome + "</p><p style='color: blue; font-size: 20px'>Responsável: " + newEmp.responsaveis + "</p><p style='color: blue; font-size: 20px'>Sexo: " + newEmp.sexo + "</p><p style='color: blue; font-size: 20px'>Nascimento: " + newEmp.nascimento + "</p><p style='color: blue; font-size: 20px'>E-mail: " + newEmp.email + "</p><p style='color: blue; font-size: 20px'>Parentesco: " + newEmp.parentesco + "</p><p style='color: blue; font-size: 20px'>Telefone: " + newEmp.telefone + "</p><p style='color: blue; font-size: 20px'>Ensino: " + newEmp.nivelescola + "</p><p style='color: blue; font-size: 20px'>Turma: " + newEmp.turma + "</p><p style='color: blue; font-size: 20px'>Série: " + newEmp.serie + "</p><p style='color: blue; font-size: 20px'>Período: " + newEmp.turno + "</p></div></div>"
    });

    console.log(newEmp.email);

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
Employee.emailCredito = async(newEmp, result) => {

    console.log(newEmp.nome);
    console.log(newEmp.email);

    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: details.email,
            pass: details.password
        }
    });
    let info = await transport.sendMail({
        from: "softwaresgabriel1@gmail.com",
        to: newEmp.email,
        subject: "Cantina Univás - (Saldo)",
        text: newEmp.nome,
        html: "<div style='text-align: center;'><h1 style='color: red;font-size: 40px'>O seu saldo mudou!</h1><h3 style='color: blue;font-size: 40px'>Olá " + newEmp.nome + "</h3><div><p style='color: blue; font-size: 30px'>Confira abaixo. Qualquer coisa é só falar pra gente 😁.</p><p style='color: red; font-size: 25px'>Saldo atual é: R$ " + newEmp.credito + "</p></div></div>"
    });

    console.log(newEmp.email);

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


Employee.findById = function(id, result) {
    dbConn.query("Select * from employees where nome = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Employee.findByIdAll = function(id, result) {
    dbConn.query("Select * from employees where usuario = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('Aquii!!!')
            result(null, res);
        }
    });
};



Employee.findAll = function(result) {
    dbConn.query("Select * from employees", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
Employee.SumAllInd = function(result) {
    dbConn.query("Select sum(credito) as SaldoTotalSistema from employees", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};
Employee.update = function(id, employee, result) {

    if (employee.usuario == 'cantina' || employee.usuario == 'admin') {
        console.log('Aqui cantina')
        dbConn.query("UPDATE employees SET nome=?,responsaveis=?,email=?,telefone=?,sexo=?,nascimento=?,parentesco=?,nivelescola=?,turma=?,serie=?,turno=? WHERE id = ?", [employee.nome, employee.responsaveis, employee.email, employee.telefone, employee.sexo, employee.nascimento, employee.parentesco, employee.nivelescola, employee.turma, employee.serie, employee.turno, id], function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    } else {
        dbConn.query("UPDATE employees SET nome=?, usuario=?,responsaveis=?,email=?,telefone=?,sexo=?,nascimento=?,parentesco=?,nivelescola=?,turma=?,serie=?,turno=? WHERE id = ? AND usuario= ?", [employee.nome, employee.usuario, employee.responsaveis, employee.email, employee.telefone, employee.sexo, employee.nascimento, employee.parentesco, employee.nivelescola, employee.turma, employee.serie, employee.turno, id, employee.usuario], function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    };
}

/* dbConn.query("UPDATE employees SET nome=?, usuario=?,responsaveis=?,email=?,telefone=?,sexo=?,nascimento=?,parentesco=?,nivelescola=?,turma=?,serie=?,turno=? WHERE id = ? AND usuario= ?", [employee.nome, employee.usuario, employee.responsaveis, employee.email, employee.telefone, employee.sexo, employee.nascimento, employee.parentesco, employee.nivelescola, employee.turma, employee.serie, employee.turno, id, employee.usuario], function(err, res) {
    if (err) {
        console.log("error: ", err);
        result(null, err);
    } else {
        result(null, res);
    }
}); */

Employee.updateCreditoAluno = function(id, employee, result) {
    dbConn.query("UPDATE employees SET credito=? WHERE id = ?", [employee.credito, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Employee.delete = function(id, result) {
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};


module.exports =
    Employee