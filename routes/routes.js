const express = require('express')
const Produto = require('../models/Produto')
const ProdutoController = require('../controllers/ProdutoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ComandaController = require('../controllers/ComandaController')
const ClienteController = require('../controllers/ClienteController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

// Produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))

// Funcionario
router.get('/funcionario', (req, res) => FuncionarioController.getAll(req, res))
router.post('/funcionario', (req, res) => FuncionarioController.create(req, res))
router.get('/funcionario/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/funcionario/:id', (req, res) => FuncionarioController.update(req, res))
router.delete('/funcionario/:id', (req, res) => FuncionarioController.delete(req, res))

// Comandas
router.get('/comanda', (req, res) => ComandaController.getAll(req, res))
router.post('/comanda', (req, res) => ComandaController.create(req, res))
router.get('/comanda/:id', (req, res) => ComandaController.get(req, res))
router.put('/comanda/:id', (req, res) => ComandaController.update(req, res))
router.delete('/comanda/:id', (req, res) => ComandaController.delete(req, res))

// Cliente
router.get('/cliente', (req, res) => ClienteController.getAll(req, res))
router.post('/cliente', (req, res) => ClienteController.create(req, res))
router.get('/cliente/:id', (req, res) => ClienteController.get(req, res))
router.put('/cliente/:id', (req, res) => ClienteController.update(req, res))
router.delete('/cliente/:id', (req, res) => ClienteController.delete(req, res))

module.exports = router