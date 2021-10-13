var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.antonio) {
    botaoComprar.style.display = "none";
    localStorage.antonio = "Comprado";
    p.textContent = localStorage.antonio;
} else {
    function comprarAntonio(){
        botaoComprar.style.display = "none";
        localStorage.antonio = "Comprado";
        p.textContent = localStorage.antonio;
    }
}
