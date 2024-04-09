const mongoose = require('mongoose')

const schema = mongoose.Schema({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    comanda_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comanda',
        required: true
    },
    quantidade: {
        type: Number,
        required: true,
        min: 1
    }
}, { timestamps: true })

const Produto_Comanda = mongoose.model('Produto_Comanda', schema)

module.exports = Produto_Comanda