var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.venceslau) {
    botaoComprar.style.display = "none";
    localStorage.venceslau = "Comprado";
    p.textContent = localStorage.venceslau;
} else {
    function comprarVenceslau(){
        botaoComprar.style.display = "none";
        localStorage.venceslau = "Comprado";
        p.textContent = localStorage.venceslau;
    }
}
