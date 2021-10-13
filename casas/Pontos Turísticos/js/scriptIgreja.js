var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.igreja) {
    botaoComprar.style.display = "none";
    localStorage.igreja = "Comprado";
    p.textContent = localStorage.igreja;
} else {
    function comprarIgreja(){
        botaoComprar.style.display = "none";
        localStorage.igreja = "Comprado";
        p.textContent = localStorage.igreja;
    }
}
