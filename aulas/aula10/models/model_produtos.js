const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {type: String, trim: true, uppercase: true, require: true},
    preco: {type: Number, min: 0 },
})

module.exports = mongoose.model("Produtos", produtoSchema);