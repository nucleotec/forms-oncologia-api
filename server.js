const express = require('express');
const bodyParser = require('body-parser');
cors = require('cors');

//criar o express app
const app = express();

/* Configure cors */
app.set('secret', 'aplicacao');

const corsOptions = {
    exposedHeaders: ['x-access-token']
};
app.use(cors(corsOptions));

/* Configure Token */
app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log('####################################');
    if (token) {
        console.log('A token is send by the application');
        console.log('Token value is: ' + token);
    } else {
        console.log('No token is send by the the application');
    }
    console.log('####################################');
    next();
});

//Porta do serviço
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

// define um rota padrao

app.get('/', (req, res) => {
    res.send("Hello!!!")
});

//Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
const login = require('./src/routes/login.routes')
const produ = require('./src/routes/produtos.routes')
const compra = require('./src/routes/compra.routes')
const saldo = require('./src/routes/saldo.routes')
const senha = require('./src/routes/senhaGerar.routes')
const avaliar = require('./src/routes/avaliar.routes')
const cadastro = require('./src/routes/cadastro.routes')
const score = require('./src/routes/score.routes')


//utilizando o middleware
app.use('/api/v1/employees', employeeRoutes)

app.use('/produtos', produ)
app.use('/compra', compra)
app.use('/saldo', saldo)
app.use('/senha', senha)

/* Novo a partir daqui */
app.use('/logon', login)
app.use('/avaliar', avaliar)
app.use('/cadastroPaciente', cadastro)
app.use('/score', score)

//Ouvir
app.listen(port, () => {
    console.log(`Server online na porta ${port}`);
})