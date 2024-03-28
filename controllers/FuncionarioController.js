
const { json } = require("express")
const Funcionario = require("../models/Funcionario")

const FuncionarioController = {
    getAll: async (req, res) => {
        res.json( await Funcionario.find())
    },

    get: async (req, res) => {

        try {
            res.json( await Funcionario.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Funcionario não existe"})
        }
        
    },

    create: async (req, res) => {
        try {
            res.json( await Funcionario.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {
        
        try {
            res.json( await Funcionario.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: "Este Funcionario não existe"})
        }

    },

    delete: async (req, res) => {
        
        try {
            res.json( await Funcionario.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Funcionario não existe"})
        }

    },
}

module.exports = FuncionarioController