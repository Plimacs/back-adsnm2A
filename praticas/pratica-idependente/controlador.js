const readline = require('readline-sync');

const Sorvete = require('./modelo');

const sorvetes = [
    {sabor: 'morango', marca: 'kibom', preco: 2},
    {sabor: 'chocolate', marca: 'kibom', preco: 2},
    {sabor: 'chocolate aguado', marca: 'desconhecida', preco: 1},
    {sabor: 'banana', marca: 'kibom', preco: 2},
    {sabor: 'baunilha', marca: 'kibom', preco: 2},
    {sabor: 'uva', marca: 'prudence', preco: 22},
    {sabor: 'suspeito', marca: 'desconhecida', preco: 0.25}
];

const bolsos = [{dinheiro: 20}, {veneno_de_rato: 1}];

function listarBolsos() {
    console.log('==========;{ Seus bolsos };==========');
    bolsos.forEach(itens => console.log(itens));
    console.log('=====================================');
};

function listarSorvetes() {
    console.log('===========;{ Sorvetes };===========');
    sorvetes.forEach(sorvete => console.log(sorvete));
    console.log('====================================');
};

function compar() {
    const sabor = readline.question('Qual sabor o senhor deseja? ');
    const buscou = sorvetes.find(sorvete => sorvete.sabor === sabor);
    if (buscou) {
        if (bolsos[0].dinheiro >= buscou.preco) {
            console.log('AI Q DELÍCIA, CARA!')
            saldoAnterior = bolsos[0].dinheiro;
            bolsos[0].dinheiro = bolsos[0].dinheiro - buscou.preco;
            console.log(`Seu dinheiro: ${saldoAnterior} - ${buscou.preco} = ${bolsos[0].dinheiro}`);
        }
        else {
            console.log('Você não tem dinheiro nem pra tomar um sorvete? Vai trabaia vagabundo!');
        };
    }
    else {
        console.log('opção inválida!');
    };
};

function trabalhar() {
    console.log('Trabalhando...');
    console.log('Você trabalhou 10horas, e conseguiu 100R$!');
    console.log('Hora do leão, você deve pagar seus impostos!');
    const resposta = readline.question('Digite (Y) para pagar os impostos ou (N) para sonegar: ');
    if (resposta.toLowerCase() === 'y') {
        console.log('Imposto de renda: -30% = 70R$');
        console.log('COFINS: -10% = 40R$');
        console.log('ICMS: -20% = 50R$');
        console.log('INSS: -11% = 39R$');
        console.log('FGTS: -10% = 29R$');
        console.log('ISS: -5% = 14R$');
        console.log('RAT: -2% = 12R$');
        saldoAnterior = bolsos[0].dinheiro;
        bolsos[0].dinheiro = bolsos[0].dinheiro + 12;
        console.log(`Seu dinheiro: ${saldoAnterior} + 12 = ${bolsos[0].dinheiro}`);
        listarBolsos();
    }
    else {
        console.log('Você caiu na malha fina!');
        console.log('Você foi multado, a multa é 10x o valor do tributo!');
        console.log('Tributos:');
        console.log('Imposto de renda: 30% = 30R$');
        console.log('COFINS: 10% = 10R$');
        console.log('ICMS: 20% = 20R$');
        console.log('INSS: 11% = 11R$');
        console.log('FGTS: 10% = 10R$');
        console.log('ISS: 5% = 5R$');
        console.log('RAT: 2% = 2R$');
        console.log('total = 88R$ x 10 = 880');
        saldoAnterior = bolsos[0].dinheiro;
        bolsos[0].dinheiro = bolsos[0].dinheiro - 880;
        console.log(`Seu dinheiro: ${saldoAnterior} - 880 = ${bolsos[0].dinheiro}`);
        listarBolsos();
    }
};

module.exports = { listarBolsos, listarSorvetes, compar, trabalhar };