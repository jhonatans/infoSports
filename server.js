const express = require('express');
const firebaseAdmin = require('firebase-admin');
const path = require('path');

// Inicializar Firebase
const serviceAccount = require('./firebaseKey.json');
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://<SEU-PROJETO>.firebaseio.com'
});
const db = firebaseAdmin.firestore();

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // para processar dados em JSON

// Rota para receber dados do formulário
app.post('/enviar-dados', async (req, res) => {
    const dados = req.body;

    try {
        await db.collection('dadosFormulario').add(dados);
        res.status(200).send('Dados salvos com sucesso no Firebase');
    } catch (error) {
        console.error('Erro ao salvar no Firebase', error);
        res.status(500).send('Erro ao salvar dados');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
