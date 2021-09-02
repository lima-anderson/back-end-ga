const express = require('express');

const Candidato = require('../models/Candidate')

const router = express.Router();

router.post('/registrar', async (req, res) => {
    const { cpf } = req.body;
    try {
        if(await Candidato.findOne({cpf} ))
            return res.status(400).send({ error: 'O candidato já está registrado' })

        const candidato = await Candidato.create(req.body);
        return res.send({ candidato })
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

router.get('/registros', async (req, res) => {
    try {
        const candidatos = await Candidato.find()
        return res.json(candidatos)
      } catch (error) {
          console.log(error.message)
      }
})

module.exports = app => app.use('/', router);