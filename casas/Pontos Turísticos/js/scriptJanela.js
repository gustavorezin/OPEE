var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.janela) {
    botaoComprar.style.display = "none";
    localStorage.janela = "Comprado";
    p.textContent = localStorage.janela;
} else {
    function comprarJanela(){
        botaoComprar.style.display = "none";
        localStorage.janela = "Comprado";
        p.textContent = localStorage.janela;
    }
}

