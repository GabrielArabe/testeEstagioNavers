const express = require('express')
const app = express()
const port = 3000
const naverDAO = require('./db/naverDAO');
const projectDAO = require('./db/projectDAO');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/Navers/Index', (req, res) => {
    naverDAO.getAllNavers((result) => res.json(result));
});

app.get('/Navers/Show/:id', (req, res) => {
    naverDAO.getNaverDetail(req.params.id, (result) => res.json(result));
})

app.post('/Navers/Store', (req, res) => {
    naverDAO.insertNaver(req.body.name, req.body.birthdate, req.body.admission_date, req.body.job_role, req.body.projects,
        (insertResult) => naverDAO.getNaverDetail(insertResult[0], (result) => res.json(result)));
});

app.get('/Projetos/Index', (req, res) => {
    projectDAO.getAllProjects((result) => res.json(result));
});

app.get('/Projetos/Show/:id', (req, res) => {
    projectDAO.getProjectDetail(req.params.id, (result) => res.json(result));
})

app.post('/Projetos/Store', (req, res) => {
    projectDAO.insertProject(req.body.name, req.body.navers,
        (insertResult) => projectDAO.getProjectDetail(insertResult[0], (result) => res.json(result)));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});