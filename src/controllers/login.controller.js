'use strict';
const Login = require('../models/login.model');
const jwt = require('jsonwebtoken');


exports.login = async(req, res) => {
    const new_login = await new Login(req.body);
    //handles null error
    Login.loginUser(new_login, function(err, login) {
        if (login) {
            console.log(`Usuário ${req.body.usuario} autenticado`);
            console.log('Adicionado token sem expiração');
            const token = jwt.sign({
                    id: login[0].id,
                    usuario: login[0].usuario,
                    perfil: login[0].perfil
                },
                req.app.get('secret'));
            console.log(token);
            res.set('x-access-token', token);
            return res.status(200).send({ message: 'Logado com sucesso!' });

        } else {
            console.log('Erro no login, nenhum token foi gerado');
            res.status(401).send({ message: 'Erro no usuário ou senha' });
        }
    });
}

exports.create = function(req, res) {
    const new_employee = new Login(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Login.create(new_employee, function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Employee added successfully!", data: employee });
        });
    }
};

exports.findAll = function(req, res) {
    Login.findAll(function(err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};

exports.findById = function(req, res) {
    Login.findById(req.params.id, function(err, employee) {
        console.log(req.params.id)
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.update = function(req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Login.update(req.params.id, new Login(req.body), function(err, employee) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Login.delete(req.params.id, function(err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};