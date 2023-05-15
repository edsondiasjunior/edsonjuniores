function verMais() {
    var verMenos = document.getElementById("verMenos");
    var verMais = document.getElementById("verMais");
    var btnVerMais = document.getElementById("btnVerMais");

    if (verMenos.style.display === "none") {
        verMenos.style.display = "inline";
        verMais.style.display = "none";
        btnVerMais.innerText = "Ver Mais"
    }

    else {
        verMenos.style.display = "none";
        verMais.style.display = "inline";
        btnVerMais.innerHTML = "Ver Menos"
    }
}