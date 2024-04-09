
const { json } = require("express")
const Produto_Comanda = require("../models/Produto_Comanda")

const Produto_ComandaController = {
    getAll: async (req, res) => {
        res.json( await Produto_Comanda.find())
    },

    get: async (req, res) => {

        try {
            res.json( await Produto_Comanda.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Produto_Comanda não existe"})
        }
        
    },

    create: async (req, res) => {
        try {
            res.json( await Produto_Comanda.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {
        
        try {
            res.json( await Produto_Comanda.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: "Este Produto_Comanda não existe"})
        }

    },

    delete: async (req, res) => {
        
        try {
            res.json( await Produto_Comanda.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Produto_Comanda não existe"})
        }

    },
}

module.exports = Produto_ComandaController