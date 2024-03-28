const express = require('express')
const Produto = require('../models/Produto')
const ProdutoController = require('../controllers/ProdutoController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))

module.exports = router