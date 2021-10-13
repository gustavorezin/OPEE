var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.santinha) {
    botaoComprar.style.display = "none";
    localStorage.santinha = "Comprado";
    p.textContent = localStorage.santinha;
} else {
    function comprarSantinha(){
        botaoComprar.style.display = "none";
        localStorage.santinha = "Comprado";
        p.textContent = localStorage.santinha;
    }
}

