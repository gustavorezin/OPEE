var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.aristiliano) {
    botaoComprar.style.display = "none";
    localStorage.aristiliano = "Comprado";
    p.textContent = localStorage.aristiliano;
} else {
    function comprarAristiliano(){
        botaoComprar.style.display = "none";
        localStorage.aristiliano = "Comprado";
        p.textContent = localStorage.aristiliano;
    }
}
