var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.museu) {
    botaoComprar.style.display = "none";
    localStorage.museu = "Comprado";
    p.textContent = localStorage.museu;
} else {
    function comprarMuseu(){
        botaoComprar.style.display = "none";
        localStorage.museu = "Comprado";
        p.textContent = localStorage.museu;
    }
}

