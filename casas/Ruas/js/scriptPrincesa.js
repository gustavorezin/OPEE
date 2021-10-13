var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.princesa) {
    botaoComprar.style.display = "none";
    localStorage.princesa = "Comprado";
    p.textContent = localStorage.princesa;
} else {
    function comprarPrincesa(){
        botaoComprar.style.display = "none";
        localStorage.princesa = "Comprado";
        p.textContent = localStorage.princesa;
    }
}
