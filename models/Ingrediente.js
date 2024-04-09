const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    descricao: String
}, { timestamps: true })

const Ingrediente = mongoose.model('Ingrediente', schema)

module.exports = Ingrediente