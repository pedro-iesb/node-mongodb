
const { json } = require("express")
const Tipo = require("../models/Tipo")

const TipoController = {
    getAll: async (req, res) => {
        res.json( await Tipo.find())
    },

    get: async (req, res) => {

        try {
            res.json( await Tipo.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Tipo não existe"})
        }
        
    },

    create: async (req, res) => {
        try {
            res.json( await Tipo.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {
        
        try {
            res.json( await Tipo.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: "Este Tipo não existe"})
        }

    },

    delete: async (req, res) => {
        
        try {
            res.json( await Tipo.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Tipo não existe"})
        }

    },
}

module.exports = TipoController