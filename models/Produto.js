const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength:10,
        trim: true
    },
    preco: {
        type: Number,
        default: 0,
        min: [0, 'mais  que zero'],
        match: /^\d+(\.\d{1,2})?$/ 
    },

    tamanho: {
        type: String,
    },
    tipo: {
        type: String,
        enum: ["bebidas", "pizzas", "massas", "sobremesas", "comida"]
    },
    
    ingredientes: [String]
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto