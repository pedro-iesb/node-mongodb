const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })


const Forma_Pagamento = mongoose.model('Forma_Pagamento', schema)

module.exports = Forma_Pagamento