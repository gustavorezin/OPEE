var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.maia) {
    botaoComprar.style.display = "none";
    localStorage.maia = "Comprado";
    p.textContent = localStorage.maia;
} else {
    function comprarMaia(){
        botaoComprar.style.display = "none";
        localStorage.maia = "Comprado";
        p.textContent = localStorage.maia;
    }
}
