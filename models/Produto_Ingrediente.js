const mongoose = require('mongoose')

const schema = mongoose.Schema({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    ingrediente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingrediente',
        required: true
    }
}, { timestamps: true })

const Produto_Ingrediente = mongoose.model('Produto_Ingrediente', schema)

module.exports = Produto_Ingrediente