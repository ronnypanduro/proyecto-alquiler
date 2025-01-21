const express = require('express');
const estadoService = require('../services/estadoService');
const router = express.Router();

router.get('/', async (req, res) => {
    const estados = await estadoService.listaEstado();
    res.json(estados);
})
module.exports = router;