var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.udir) {
    botaoComprar.style.display = "none";
    localStorage.udir = "Comprado";
    p.textContent = localStorage.udir;
} else {
    function comprarUdir(){
        botaoComprar.style.display = "none";
        localStorage.udir = "Comprado";
        p.textContent = localStorage.udir;
    }
}
