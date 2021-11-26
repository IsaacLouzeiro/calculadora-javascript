function mudarCor(cor) {
    var geral = document.getElementById("geral")

    var itemClaro = document.getElementById('item-claro')

    var itemEscuro = document.getElementById('item-escuro')

    switch (cor) {
        // inserir classe "x" se o botao "x" for pressionado
        case "claro":
            geral.classList.add('claro')
            geral.classList.remove('escuro')

            itemClaro.classList.add("active")
            itemEscuro.classList.remove("active")
            break;

        case "escuro":
            geral.classList.add('escuro')
            geral.classList.remove('claro')

            itemClaro.classList.remove("active")
            itemEscuro.classList.add("active")
            break;
    
        default:
            break;
    }
}