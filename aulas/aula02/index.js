const readline = require('readline-sync');

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

function menu() {
    console.log('1. Listar');
    console.log('2. Criar');
    console.log('3. Buscar');
    console.log('4. Atualizar');
    console.log('5. Remover');
    console.log('6. Sair');
};

function escolherOpcao(opcao) {
    switch (opcao) {
        case '1':
            listar();
            break;
        case '2':
            criar();
            break;
        case '3':
            buscar();
            break;
        case '4':
            atulaizar()
            break;
        case '5':
            remover()
            break;
        case '6':
            process.exit(0);
        default:
            console.log('Opção inválida!')
            break;
    }
}

function main() {
    while(true) {
        menu();
        const opcao = readline.question('Entre com uma opção: ');
        escolherOpcao(opcao);
    }
}

main();