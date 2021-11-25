function numeros(valor) {
    document.getElementById("tela").value += valor;
}

function calculos(calc) {
    let valor = document.getElementById("tela").value;
    
    if (valor == "") {
        console.log("vazio")
    }else {
        switch (calc) {
            case "+":
                console.log("não vazio")
                var val1 = valor;
                var calc1 = calc;
                valores = [val1, calc1]
                document.getElementById("mostrar-calculo").value = valores[0] + valores[1];
                segundaParte();
                break;

            case "-":
                console.log("não vazio")
                var val1 = valor;
                var calc1 = calc;
                valores = [val1, calc1]
                document.getElementById("mostrar-calculo").value = valores[0] + valores[1];
                
                segundaParte();
                break;

            case "*":
                console.log("não vazio")
                var val1 = valor;
                var calc1 = calc;
                valores = [val1, calc1]
                document.getElementById("mostrar-calculo").value = valores[0] + valores[1];
                
                segundaParte();
                break;

            case "/":
                console.log("não vazio")
                var val1 = valor;
                var calc1 = calc;
                valores = [val1, calc1]
                document.getElementById("mostrar-calculo").value = valores[0] + valores[1];
                
                segundaParte();
                break;

            case "=":
                var val2 = valor;
                document.getElementById("mostrar-calculo").value += val2;

                if (valores[1] == "+") {
                    var valor1 = parseInt(valores[0]);
                    var valor2 = parseInt(val2);
                    document.getElementById("tela").value = valor1 + valor2;
                }else if (valores[1] == "-") {
                    var valor1 = parseInt(valores[0]);
                    var valor2 = parseInt(val2);
                    document.getElementById("tela").value = valor1 - valor2;
                }else if (valores[1] == "*") {
                    var valor1 = parseInt(valores[0]);
                    var valor2 = parseInt(val2);
                    document.getElementById("tela").value = valor1 * valor2;
                }else if (valores[1] == "/") {
                    var valor1 = parseInt(valores[0]);
                    var valor2 = parseInt(val2);
                    document.getElementById("tela").value = valor1 / valor2;
                }
                break;
        
            default:
                break;
        }
    }
}

function segundaParte() {
    document.getElementById("tela").value = " ";
}