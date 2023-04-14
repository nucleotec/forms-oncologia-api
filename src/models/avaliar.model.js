'use strict';

var dbConn = require('./../../config/db.config');

var Avaliar = function(avaliar) {
    this.usuario = avaliar.usuario;
    this.nome = avaliar.nome;
    this.data = avaliar.data;
    this.fator1 = avaliar.fator1;
    this.fator2 = avaliar.fator2;
    this.fator3 = avaliar.fator3;
    this.fator4 = avaliar.fator4;
    this.fator5 = avaliar.fator5;
    this.fator6 = avaliar.fator6;
    this.fator7 = avaliar.fator7;
    this.fator8 = avaliar.fator8;
    this.fator9 = avaliar.fator9;
    this.fator10 = avaliar.fator10;
    this.fator11 = avaliar.fator11;
    this.fator12 = avaliar.fator12;
    this.fator13 = avaliar.fator13;
    this.fator14 = avaliar.fator14;
    this.fator15 = avaliar.fator15;
    this.fator16 = avaliar.fator16;
    this.fator17 = avaliar.fator17;
    this.fator18 = avaliar.fator18;
    this.fator19 = avaliar.fator19;
    this.fator20 = avaliar.fator20;
    this.fator21 = avaliar.fator21;
    this.fator22 = avaliar.fator22;
    this.fator23 = avaliar.fator23;
    this.fator24 = avaliar.fator24;
    this.fator25 = avaliar.fator25;
    this.fator26 = avaliar.fator26;
    this.fator27 = avaliar.fator27;
    this.fator28 = avaliar.fator28;
    this.fator29 = avaliar.fator29;
    this.fator30 = avaliar.fator30;
    this.fator31 = avaliar.fator31;
    this.fator32 = avaliar.fator32;
    this.fator33 = avaliar.fator33;
    this.fator34 = avaliar.fator34;
    this.fator35 = avaliar.fator35;
    this.fator36 = avaliar.fator36;
    this.fator37 = avaliar.fator37;
    this.fator38 = avaliar.fator38;
    this.fator39 = avaliar.fator39;
    this.fator40 = avaliar.fator40;
    this.fator41 = avaliar.fator41;
    this.fator42 = avaliar.fator42;
    this.fator43 = avaliar.fator43;
    this.fator44 = avaliar.fator44;
    this.fator45 = avaliar.fator45;
    this.fator46 = avaliar.fator46;
};

Avaliar.Avaliar = function(newEmp, result) {

    dbConn.query("INSERT INTO paciente SET ?", newEmp, function(err, res) {
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            /* console.log(newEmp); */
            result(null, res.insertId);
        }
    });


};
Avaliar.Protecao = function(newEmp, result) {

    var soma = Number(newEmp.fator1) + Number(newEmp.fator2) + Number(newEmp.fator3) +
        Number(newEmp.fator4) + Number(newEmp.fator5) + Number(newEmp.fator6) +
        Number(newEmp.fator7) + Number(newEmp.fator8) + Number(newEmp.fator9) +
        Number(newEmp.fator10) + Number(newEmp.fator11) + Number(newEmp.fator12) +
        Number(newEmp.fator13) + Number(newEmp.fator14) + Number(newEmp.fator15) +
        Number(newEmp.fator16) + Number(newEmp.fator17) + Number(newEmp.fator18);

    var media = ((Number(newEmp.fator19) + Number(newEmp.fator20) + Number(newEmp.fator21) +
        Number(newEmp.fator22) + Number(newEmp.fator23) + Number(newEmp.fator24) +
        Number(newEmp.fator25) + Number(newEmp.fator26) + Number(newEmp.fator27) +
        Number(newEmp.fator28) + Number(newEmp.fator29) + Number(newEmp.fator30) +
        Number(newEmp.fator31) + Number(newEmp.fator32) + Number(newEmp.fator33) +
        Number(newEmp.fator34) + Number(newEmp.fator35) + Number(newEmp.fator36) +
        Number(newEmp.fator37) + Number(newEmp.fator38) + Number(newEmp.fator39) +
        Number(newEmp.fator40) + Number(newEmp.fator41) + Number(newEmp.fator42) +
        Number(newEmp.fator43) + Number(newEmp.fator44) + Number(newEmp.fator45) +
        Number(newEmp.fator46)));

    var scoreFinal = soma + media;

    /* Não mudamos o nome para não dar erro na api do banco porém na média seria (SOMA2) */

    /* console.log(soma)
    console.log(media)
    console.log(scoreFinal) */


    dbConn.query("INSERT INTO protecao SET usuario=?, nome=?, data=?, soma=?, media=?, scoreFinal=? ", [newEmp.usuario, newEmp.nome, newEmp.data, soma, media, scoreFinal], function(err, res) {
        if (err) {
            console.log("error: ", err);

            result(err, null);
        } else {
            /*  console.log(newEmp); */
            result(null, res.insertId);
        }
    });
};

/* controla o relatorio de avaliação */
Avaliar.findByIdPacienteAvaliacao = function(id, result) {
    console.log(id)
    dbConn.query("Select * from paciente where id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('Aquii!!!')
            result(null, res);
        }
    });
};


module.exports = Avaliar;