const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

const Cargo = mongoose.model('Cargo', schema)

module.exports = Cargo