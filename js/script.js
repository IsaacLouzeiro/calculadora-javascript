// inserindo o numero pressionado na tela da calculadora
function numeros(valor) {
    document.getElementById("tela").value += valor;
}

// parte de calculo dos valores
function calculos(calc) {
    // criando a variavel do primeiro valor
    let valor = document.getElementById("tela").value;
    
    // se não for inserido um número, não fazer nada
    if (valor == "") {
    }
    // caso for inserido, continua a lógica
    else {
        // ver qual caractere foi pressionado
        switch (calc) {
            // caso for "+", faça a soma
            case "+":
                var val1 = valor;
                var calc1 = calc;
                // inserindo a variavel do primeiro valor e do calculo em um array
                valores = [val1, calc1]
                // inserindo o que foi pressionado, na tela pequena
                document.getElementById("mostrar-calculo").value = valores[0] + " " + valores[1];
                // enviando codigo para outra funcao
                segundaParte();
                break;
            // caso for "-", faça a subtração
            case "-":
                var val1 = valor;
                var calc1 = calc;
                // inserindo a variavel do primeiro valor e do calculo em um array
                valores = [val1, calc1]
                // inserindo o que foi pressionado, na tela pequena
                document.getElementById("mostrar-calculo").value = valores[0] + " " + valores[1];
                // enviando codigo para outra funcao
                segundaParte();
                break;

            // caso for "*", faça a subtração
            case "*":
                var val1 = valor;
                var calc1 = calc;
                // inserindo a variavel do primeiro valor e do calculo em um array
                valores = [val1, calc1]
                // inserindo o que foi pressionado, na tela pequena
                document.getElementById("mostrar-calculo").value = valores[0] + " " + valores[1];
                // enviando codigo para outra funcao
                segundaParte();
                break;
            
            // caso for "/", faça a subtração
            case "/":
                var val1 = valor;
                var calc1 = calc;
                // inserindo a variavel do primeiro valor e do calculo em um array
                valores = [val1, calc1]
                // inserindo o que foi pressionado, na tela pequena
                document.getElementById("mostrar-calculo").value = valores[0] + " " + valores[1];
                // enviando codigo para outra funcao
                segundaParte();
                break;

            // caso for "=", faça os calculos, e de os resultados
            case "=":
                // criando a variavel do segundo valor
                var val2 = valor;
                // inserindo o que foi pressionado, na tela pequena
                document.getElementById("mostrar-calculo").value += val2;

                // fazer o calculo, conforme o simbolo selecionado
                if (valores[1] == "+") {
                    // transformando String em Float
                    var valor1 = parseFloat(valores[0]);
                    var valor2 = parseFloat(val2);
                    // colocando resultado do calculo na tela grande
                    document.getElementById("tela").value = valor1 + valor2;
                }else if (valores[1] == "-") {
                    // transformando String em Float
                    var valor1 = parseFloat(valores[0]);
                    var valor2 = parseFloat(val2);
                    // colocando resultado do calculo na tela grande
                    document.getElementById("tela").value = valor1 - valor2;
                }else if (valores[1] == "*") {
                    // transformando String em Float
                    var valor1 = parseFloat(valores[0]);
                    var valor2 = parseFloat(val2);
                    // colocando resultado do calculo na tela grande
                    document.getElementById("tela").value = valor1 * valor2;
                }else if (valores[1] == "/") {
                    // transformando String em Float
                    var valor1 = parseFloat(valores[0]);
                    var valor2 = parseFloat(val2);
                    // colocando resultado do calculo na tela grande
                    document.getElementById("tela").value = valor1 / valor2;
                }
                break;
            
            // caso for "c", limpar tudo
            case "c":
                document.getElementById("mostrar-calculo").value = "";
                document.getElementById("tela").value = "";
                break;
            default:
                break;
        }
    }
}

// zerando a tela grande, para inserir o proximo valor
function segundaParte() {
    document.getElementById("tela").value = " ";
}