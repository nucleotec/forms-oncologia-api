const Compra = require('../models/compra.model');

exports.compra = function(req, res) {
    const new_compra = new Compra(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Compra.compraz(new_compra, function(err, compra) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Compra added successfully!", data: compra });
        });
    }
}