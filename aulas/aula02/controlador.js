const produtos = [];

function listar() {
    console.log('===========;{ Lista };===========')
    produtos.forEach(produto => console.log(produto.nome,'-', produto.preco));
    console.log('=================================')
}

function criar() {
    const nome = readline.question('Entre com o nome do produto: ');
    const preco = readline.question('Entre com o preco do produto: ');
    const novo = { nome, preco};
    produtos.push(novo);
}

function buscar() {
    const nome = readline.question('Entre com o nome do produto: ');
    const buscou = produtos.find(produto => produto.nome === nome);
    if (buscou) {
        console.log(buscou.nome,'-', buscou.preco)
    } else {
        console.log('Produto não localizado!')
    }
}

function atulaizar() {
    const nome = readline.question("Entre com o nome do produto: ");
    const buscou = produtos.find(produtos => produtos.nome === nome)
    if (buscou) {
        const preco = readline.question('Entre com o novo preço: ');
        buscou.preco = preco;
    } else {
        console.log('Produto não localizado!'); 
    }
}

function remover() {
    const nome = readline.question('Entre com o nome do produto: ')
    const posicao = produtos.findIndex(produto => produto.nome === nome);
    if (posicao>=0) {
        produtos.splice(posicao, 1);
    } else {
        console.log('Produto nãp localizado!')
    }
}

module.exports = { listar, criar, buscar, atulaizar, remover };