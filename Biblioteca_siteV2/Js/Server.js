const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path'); // Módulo para manipular caminhos de arquivos

const app = express();
const port = 3000;

// Middleware para permitir requisições de qualquer origem
app.use(cors());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Atualize com seu usuário MySQL
    password: 'ElCabr0nwwssadadba', // Atualize com sua senha MySQL
    database: 'Biblioteca'
});

// Conecta ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Endpoint para obter a lista de autores
app.get('/api/autores', (req, res) => {
    const query = 'SELECT id_autor, nome FROM Autor';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar autores:', err);
            res.status(500).send('Erro ao buscar autores');
            return;
        }
        res.json(results); 
    });
});

// Configuração para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '')));

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
