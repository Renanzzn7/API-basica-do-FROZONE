// API do Frozone - Renan Vinicius

const express = require('express');
const app = express();
const port = 3000;

// Dados basicos
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

app.get('/', (req, res) => {
    res.send("Bem-vindo à API do Frozone!");
});

app.get('/frozone', (req, res) => {
    res.json(frozone);
});

app.get('/frozone/habilidades', (req, res) => {
    res.json(frozone.habilidades);
});

app.get('/frozone/frases', (req, res) => {
    res.json(frozone.frasesFamosas);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`API do Frozone rodando em http://localhost:${port}`);
});
