var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.francisco) {
    botaoComprar.style.display = "none";
    localStorage.francisco = "Comprado";
    p.textContent = localStorage.francisco;
} else {
    function comprarFrancisco(){
        botaoComprar.style.display = "none";
        localStorage.francisco = "Comprado";
        p.textContent = localStorage.francisco;
    }
}
