document.getElementById('pecera rectangular').addEventListener('submit', function (event) {
    event.preventDefault();

    let largo = parseInt(document.getElementById('largo').value);
    let ancho = parseInt(document.getElementById('ancho').value);
    let alto = parseInt(document.getElementById('alto').value);

    let volumenCm = largo * ancho * alto;
    let Litros = volumenCm * 0.001;

    alert("El volumen de la pecera rectangular es de " + Litros + " litros.");
});

