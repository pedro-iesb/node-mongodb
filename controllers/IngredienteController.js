
const { json } = require("express")
const Ingrediente = require("../models/Ingrediente")

const IngredienteController = {
    getAll: async (req, res) => {
        res.json( await Ingrediente.find())
    },

    get: async (req, res) => {

        try {
            res.json( await Ingrediente.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Ingrediente não existe"})
        }
        
    },

    create: async (req, res) => {
        try {
            res.json( await Ingrediente.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {
        
        try {
            res.json( await Ingrediente.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: "Este Ingrediente não existe"})
        }

    },

    delete: async (req, res) => {
        
        try {
            res.json( await Ingrediente.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Ingrediente não existe"})
        }

    },
}

module.exports = IngredienteController