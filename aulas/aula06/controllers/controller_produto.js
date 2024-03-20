const produtos = [];

function listarTodos(req, res) {
    res.json(produtos)
}

function buscarPeloId(req, res) {
    const {produtoId} = req.params;
    const produtoEcontrardo = produtos.find(item => item.id == produtoId);
    if (produtoEcontrardo) {
        res.json(produtoEcontrardo);
    } else {
        res.status(404).json({msg: "Produto não encontrado"});
    }
}

function criar(req, res) {
    const {nome, preço} = req.body;
    const prodututoNovo = { id: produtos.length+1,nome, preco}
    produtos.push(produtosNvo);
    res.status(201).jason(produtosNvo);
}

function atualizar(req, res) {
    const {produtoId} = req.params;
    const { nome, preco } = req.body;
    const produtoEcontrardo = produtos.find(item => item.id == produtoId);
    if (produtoEcontrardo) {
        produtoEcontrardo.nome = nome;
        produtoEcontrardo.preco = preco;
        res.json(produtoEcontrardo);
    } else {
        res.status(404).json({msg: "Produto não encontrado"});
    }
}

function remover(req, res) {
    const { produtoId } = req.params;
    const posicao = produtos.findIndex(item => item.id == produtoId);
    if (posicao >= 0) {
        produtos.splice(posicao, 1);
        res.status(204).end();
    } else {
        res.status(404).json({msg: "Produto não encontrado"});
    }
}

module.exports = {listarTodos, buscarPeloId, criar, atualizar, remover}