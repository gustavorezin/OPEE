var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.paredao) {
    botaoComprar.style.display = "none";
    localStorage.paredao = "Comprado";
    p.textContent = localStorage.paredao;
} else {
    function comprarParedao(){
        botaoComprar.style.display = "none";
        localStorage.paredao = "Comprado";
        p.textContent = localStorage.paredao;
    }
}

