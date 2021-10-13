var botaoComprar = document.querySelector('.botaoComprar');
var p = document.querySelector('p');


if (localStorage.miguel) {
    botaoComprar.style.display = "none";
    localStorage.miguel = "Comprado";
    p.textContent = localStorage.miguel;
} else {
    function comprarMiguel(){
        botaoComprar.style.display = "none";
        localStorage.miguel = "Comprado";
        p.textContent = localStorage.miguel;
    }
}
