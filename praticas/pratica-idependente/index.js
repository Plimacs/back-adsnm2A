const readline = require('readline-sync')

const controlador = require('./controlador')

console.log('🍦⭐ Bem vindo ao simulador de tomar sorvete!⭐🍨');

function menu() {
    console.log('Essas são suas ações disponíveis: ');
    console.log('1 - Verificar bolsos');
    console.log('2 - Listar sorvetes');
    console.log('3 - Comprar sorvete');
    console.log('4 - Trabalhar');
    console.log('0 - Fexar o simulador');
};

function escolherOpcao(opcao) {
    switch (opcao) {
        case '1':
            controlador.listarBolsos();
            break;
        case '2':
            controlador.listarSorvetes();
            break;
        case '3':
            controlador.compar();
            break;
        case '4':
            controlador.trabalhar();
            break;
        case '0':
            process.exit(0);
            break;
        default:
            console.log('Opção inválida!')
            break;
    }
}

function main() {
    while (true) {
        menu();
        const opcao = readline.question('Digite o numero da acao desejada: ')
        escolherOpcao(opcao);
    }
}

main();