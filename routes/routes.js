const express = require('express')
const Produto = require('../models/Produto')
const ProdutoController = require('../controllers/ProdutoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ComandaController = require('../controllers/ComandaController')
const ClienteController = require('../controllers/ClienteController')
const CargoController = require('../controllers/CargoController')
const Forma_PagamentoController = require('../controllers/Forma_PagamentoController')
const IngredienteController = require('../controllers/IngredienteController')
const Produto_ComandaController = require('../controllers/Produto_ComandaController')
const Produto_IngredienteController = require('../controllers/Produto_IngredienteController')
const TipoController = require('../controllers/TipoController')
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

// Cargo
router.get('/cargo', (req, res) => CargoController.getAll(req, res))
router.post('/cargo', (req, res) => CargoController.create(req, res))
router.get('/cargo/:id', (req, res) => CargoController.get(req, res))
router.put('/cargo/:id', (req, res) => CargoController.update(req, res))
router.delete('/cargo/:id', (req, res) => CargoController.delete(req, res))

// Forma Pagamento
router.get('/forma_pagamento', (req, res) => Forma_PagamentoController.getAll(req, res))
router.post('/forma_pagamento', (req, res) => Forma_PagamentoController.create(req, res))
router.get('/forma_pagamento/:id', (req, res) => Forma_PagamentoController.get(req, res))
router.put('/forma_pagamento/:id', (req, res) => Forma_PagamentoController.update(req, res))
router.delete('/forma_pagamento/:id', (req, res) => Forma_PagamentoController.delete(req, res))

// Ingrediente
router.get('/ingrediente', (req, res) => IngredienteController.getAll(req, res))
router.post('/ingrediente', (req, res) => IngredienteController.create(req, res))
router.get('/ingrediente/:id', (req, res) => IngredienteController.get(req, res))
router.put('/ingrediente/:id', (req, res) => IngredienteController.update(req, res))
router.delete('/ingrediente/:id', (req, res) => IngredienteController.delete(req, res))

// Produto Comanda 
router.get('/produto_comanda', (req, res) => Produto_ComandaController.getAll(req, res))
router.post('/produto_comanda', (req, res) => Produto_ComandaController.create(req, res))
router.get('/produto_comanda/:id', (req, res) => Produto_ComandaController.get(req, res))
router.put('/produto_comanda/:id', (req, res) => Produto_ComandaController.update(req, res))
router.delete('/produto_comanda/:id', (req, res) => Produto_ComandaController.delete(req, res))

// Produto Ingrediente 
router.get('/produto_ingrediente', (req, res) => Produto_IngredienteController.getAll(req, res))
router.post('/produto_ingrediente', (req, res) => Produto_IngredienteController.create(req, res))
router.get('/produto_ingrediente/:id', (req, res) => Produto_IngredienteController.get(req, res))
router.put('/produto_ingrediente/:id', (req, res) => Produto_IngredienteController.update(req, res))
router.delete('/produto_ingrediente/:id', (req, res) => Produto_IngredienteController.delete(req, res))

// Tipo
router.get('/tipo', (req, res) => TipoController.getAll(req, res))
router.post('/tipo', (req, res) => TipoController.create(req, res))
router.get('/tipo/:id', (req, res) => TipoController.get(req, res))
router.put('/tipo/:id', (req, res) => TipoController.update(req, res))
router.delete('/tipo/:id', (req, res) => TipoController.delete(req, res))

module.exports = router