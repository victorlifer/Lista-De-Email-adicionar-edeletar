const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }))

let emails = [];

// rotas

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/signup', (req, res) => {
    const { email } = req.body;

    if (email) {
        email.push(email);
        res.redirect('./success')
    } else {
        res.redirect('/')
    }
});


app.get('/success', (req, res) => {
    res.render('sucess')
});

app.get('/emails', (req, res) => {
    res.render('emails', { emails: emails })
});

// rota para excluir 

app.post('/emails/delete', (req, res) => {
    const { email } = req.body;
    emails = emails.filter(item => item !== email);
    res.redirect('/emails');
});

// iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor ativo');
    console.log('http://localhost:3000')
})