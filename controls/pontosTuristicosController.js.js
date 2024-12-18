const PontoTuristico = require('../model/pontosTuristicosModels.js');

// Listar todos os pontos turísticos
exports.getPontosTuristicos = async (req, res) => {
  try {
    const pontosTuristicos = await PontoTuristico.PontoTuristicoModel.find();
    res.json(pontosTuristicos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter um ponto turístico pelo ID
exports.getOnePontoTuristico = async (req, res) => {
  try {
    const pontoTuristico = await PontoTuristico.PontoTuristicoModel.findById(req.params.id);
    res.status(200).json(pontoTuristico);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Criar um novo ponto turístico
exports.createPontoTuristico = async (req, res) => {
  try {
    const novoPontoTuristico = await PontoTuristico.PontoTuristicoModel.create(req.body);
    res.status(201).json(novoPontoTuristico);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar um ponto turístico pelo ID
exports.updatePontoTuristico = async (req, res) => {
  try {
    const pontoTuristicoAtualizado = await PontoTuristico.PontoTuristicoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Retorna o documento atualizado
    );
    res.status(200).json(pontoTuristicoAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar um ponto turístico pelo ID
exports.deletePontoTuristico = async (req, res) => {
  try {
    await PontoTuristico.PontoTuristicoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Ponto turístico deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obter um ponto turístico pelo nome
exports.getOnePontoTuristicoByNome = async (req, res) => {
  try {
    const nome = req.params.nome;
    const pontoTuristico = await PontoTuristico.PontoTuristicoModel.findOne({ nome: nome });

    if (!pontoTuristico) {
      return res.status(404).json({ message: 'Ponto turístico não encontrado' });
    }

    res.status(200).json(pontoTuristico);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
