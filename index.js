//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


var readlineSync = require('readline-sync');

function getMenu () {

    const food = parseInt(readlineSync.question(`
 
    Seja bem vindo ao menu do Microondas da Digital House!

    Por favor, escolha uma das opcoes abaixo:

    1 - Pipoca / 10 segundos (padrao);
    2 - Macarrao / 8 segundos (padrao);
    3 - Carne / 15 segundos (padrao);
    4 - Feijao / 12 segundos (padrao);
    5 - Brigadeiro / 8 segundos (padrao)
 \r\n`));

    const time = parseInt(readlineSync.question(`Digite o tempo:  
 \r\n`));
   
    switch (food) {
        case 1:
            if (time > 3 * 10) {
                console.log('\r\n Ka-buumm !!');
            } else if (time >= 2 * 10) {
                console.log('\r\n Sua comida queimou!');
            } else if (time < 10) {
                console.log('\r\n Tempo insuficiente');
            } else {
                console.log(` \r\n Prato pronto, bom apetite !!  \r\n`);
            }
            break;
        case 2:
            if (time > 3 * 8) {
                console.log('Ka-buumm !!');
            } else if (time >= 2 * 8) {
                console.log('Sua comida queimou!');
            } else if (time < 8 ) {
                console.log('Tempo insuficiente');
            } else { 
                console.log(` \r\n Prato pronto, bom apetite !!  \r\n`);
            }
            break;
        case 3:
            if (time > 3 * 15) {
                console.log('Ka-buumm !!');
            } else if (time >= 2 * 15) {
                console.log('Sua comida queimou!');
            } else if (time < 15) {
                console.log('Tempo insuficiente');
            } else {
                console.log(` \r\n Prato pronto, bom apetite !!  \r\n`);
            }
            break;
        case 4:
            if (time > 3 * 12) {
                console.log('Ka-buumm !!');
            } else if (time >= 2 * 12) {
                console.log('Sua comida queimou!');
            } else if (time < 12) {
                console.log('Tempo insuficiente');
            } else {
                console.log(` \r\n Prato pronto, bom apetite !!  \r\n`);
            }
            break;
        case 5:
            if (time > 3 * 8) {
                console.log('Ka-buumm !!');
            } else if (time >= 2 * 8) {
                console.log('Sua comida queimou!');
            } else if (time < 8 && food === 5) {
                console.log('Tempo insuficiente');
            } else {
                console.log(` \r\n Prato pronto, bom apetite !!  \r\n`);
            } 
            break;
        default:
            console.log('Prato inexistente, verifique o menu e tente novamente');
    }

    console.log(`
                 Resultado do seu pedido: \r\n
               - Voce escolheu a opção ${food}. 
               - Tempo escolhido de preparo foi de ${time} segundos. 
               
                 Obrigado por utilizar o Microondas da Digital House !!
               \r\n `);
}

getMenu()