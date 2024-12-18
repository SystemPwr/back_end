var express = require('express');
var router = express.Router();
var pontoTuristicoController = require('../controls/pontosTuristicosController.js');

// Rota para listar todos os pontos turísticos
router.get('/', pontoTuristicoController.getPontosTuristicos);
router.post('/', pontoTuristicoController.createPontoTuristico);
router.get('/:id', pontoTuristicoController.getOnePontoTuristico);
router.get('/nome/:nome', pontoTuristicoController.getOnePontoTuristicoByNome);
router.put('/:id', pontoTuristicoController.updatePontoTuristico);
router.delete('/:id', pontoTuristicoController.deletePontoTuristico);

module.exports = router;
