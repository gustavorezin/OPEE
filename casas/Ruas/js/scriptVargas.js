var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.vargas) {
    botaoComprar.style.display = "none";
    localStorage.vargas = "Comprado";
    p.textContent = localStorage.vargas;
} else {
    function comprarVargas(){
        botaoComprar.style.display = "none";
        localStorage.vargas = "Comprado";
        p.textContent = localStorage.vargas;
    }
}
