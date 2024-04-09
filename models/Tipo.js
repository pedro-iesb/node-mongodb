const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const Tipo = mongoose.model('Tipo', schema)

module.exports = Tipo