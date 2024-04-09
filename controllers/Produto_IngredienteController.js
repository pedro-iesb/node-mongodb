
const { json } = require("express")
const Produto_Ingrediente = require("../models/Produto_Ingrediente")

const Produto_IngredienteController = {
    getAll: async (req, res) => {
        res.json( await Produto_Ingrediente.find())
    },

    get: async (req, res) => {

        try {
            res.json( await Produto_Ingrediente.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Produto_Ingrediente não existe"})
        }
        
    },

    create: async (req, res) => {
        try {
            res.json( await Produto_Ingrediente.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {
        
        try {
            res.json( await Produto_Ingrediente.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: "Este Produto_Ingrediente não existe"})
        }

    },

    delete: async (req, res) => {
        
        try {
            res.json( await Produto_Ingrediente.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Produto_Ingrediente não existe"})
        }

    },
}

module.exports = Produto_IngredienteController