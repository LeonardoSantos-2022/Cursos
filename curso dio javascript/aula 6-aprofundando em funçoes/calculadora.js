   
function calculadora(){
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    if( operacao >= 7 || !operacao  ){
        alert("Numero ou cararter incorrentos")
        calculadora()
    }
    
    // verificando se as variáveis são válidas
    if (!n1 || !n2) {
        alert('erro - parâmetros inválidos');
            calculadora();
       
    } else {
        // definindo as funções
        function soma() {
            resultado = n1 + n2;
            // mostrando o resultado usando template strings
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao1();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao1();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao1();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao1();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao1();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
            novaOperacao1();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais!');
            } else if(opcao == " ") {
                alert('Digite uma opção válida!');

            }
            

        }

        function novaOperacao1(){
            const operacao = Number(prompt('deseja fazer uma nova operação?'))
                novaOperacao()
        }

    if( operacao === 1 ){
        soma() 
        novaOperacao()
    } else if(operacao=== 2){
        subtracao()
        novaOperacao()
    }else if(operacao === 3){
        multiplicacao()
        novaOperacao()
    }else if(operacao === 4){
        divisaoReal()
        novaOperacao()
    }
    else if (operacao === 5) {
        divisaoInteira()
        novaOperacao()
    }
    else if (operacao === 6){
        potenciacao()
        novaOperacao()
    }

    

    }
    switch (operacao) {
        case 1: 
        soma()
            novaOperacao()
        break;
        case 2:
            subtracao()
            case 3:
                multiplicacao()
            break;
            case 4:
                divisaoReal()
            break;

            case 5:
                divisaoInteira()
            break;
            case 6:
                potenciacao()
            break;
    }       
} 

calculadora()

