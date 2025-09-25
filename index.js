// API do Frozone - Renan Vinicius

const express = require('express');
const app = express();
const port = 3000;

// Dados básicos do personagem
const frozone = {
    nome: "Lucius Best",
    codinome: "Frozone",
    filme: "Os Incríveis",
    habilidades: ["congelar superfícies", "criar rampas de gelo"],
    aliados: ["Sr. Incrível", "Mulher-Elástica", "Violeta", "Flash"],
    frasesFamosas: [
        "Querida, cadê meu traje de super-herói?",
        "Sabe, eu sou apenas um cara que consegue congelar coisas."
    ]
};

// Rota principal
app.get('/', (req, res) => {
    res.send("Bem-vindo à API do Frozone!");
});

// Retorna dados do Frozone
app.get('/frozone', (req, res) => {
    res.json(frozone);
});

// Retorna apenas habilidades
app.get('/frozone/habilidades', (req, res) => {
    res.json(frozone.habilidades);
});

// Retorna frases famosas
app.get('/frozone/frases', (req, res) => {
    res.json(frozone.frasesFamosas);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API do Frozone rodando em http://localhost:${port}`);
});
