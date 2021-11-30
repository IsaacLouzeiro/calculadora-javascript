// checar se o modo está ativo
const memColorLight = localStorage.getItem('claro');
const memColorDark = localStorage.getItem('escuro');

// deixar o item escuro por padrão
document.getElementById("item-escuro").classList.add("active");
document.getElementById("geral").classList.add("escuro");

// se o modo claro estiver no local storage
if (memColorLight) {
    document.getElementById("item-claro").classList.add("active");
    document.getElementById("item-escuro").classList.remove("active");
    document.getElementById("geral").classList.add("claro");
    document.getElementById("geral").classList.remove("escuro");
}

// se o modo escuro estiver no local storage
if (memColorDark) {
    document.getElementById("item-escuro").classList.add("active");
    document.getElementById("item-claro").classList.remove("active");
    document.getElementById("geral").classList.add("escuro");
    document.getElementById("geral").classList.remove("claro");
}

function mudarCor(btn, cor) {
    location.reload();
    var geral = document.getElementById("geral");
    switch (cor) {
        case "claro":
            // remover o modo do localStorage
            localStorage.removeItem('escuro');
            // inserir a classe active
            btn.classList.add("active");
            
            geral.classList.add("claro");

            // se tiver a classe active
            if (btn.classList.contains('active')) {
                // adicionar o tema no localStorage
                localStorage.setItem('claro', true)
                geral.classList.add("claro");
                return
            }
            // se não, remove
            localStorage.removeItem('claro');
            
            break;

        case "escuro":
            // remover o modo do localStorage
            localStorage.removeItem('claro');
            // inserir a classe active
            btn.classList.add("active");

            geral.classList.add("escuro");

            // se tiver a classe active
            if (btn.classList.contains('active')) {
                // adicionar o tema no localStorage
                localStorage.setItem('escuro', true)
                geral.classList.add("escuro");
                return
            }
            // se não, remove
            localStorage.removeItem('escuro');

            break;
    
        default:
            break;
    }
}