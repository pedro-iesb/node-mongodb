
const { json } = require("express")
const Forma_Pagamento = require("../models/Forma_Pagamento")

const Forma_PagamentoController = {
    getAll: async (req, res) => {
        res.json( await Forma_Pagamento.find())
    },

    get: async (req, res) => {

        try {
            res.json( await Forma_Pagamento.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Forma_Pagamento não existe"})
        }
        
    },

    create: async (req, res) => {
        try {
            res.json( await Forma_Pagamento.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },

    update: async (req, res) => {
        
        try {
            res.json( await Forma_Pagamento.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: "Este Forma_Pagamento não existe"})
        }

    },

    delete: async (req, res) => {
        
        try {
            res.json( await Forma_Pagamento.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: "Este Forma_Pagamento não existe"})
        }

    },
}

module.exports = Forma_PagamentoController