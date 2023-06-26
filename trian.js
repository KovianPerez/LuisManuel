document.getElementById('pecera triangular').addEventListener('submit', function (event) {
    event.preventDefault();

    let largo = parseInt(document.getElementById('largo').value);
    let ancho = parseInt(document.getElementById('ancho').value);
    let alto = parseInt(document.getElementById('alto').value);

    let volumenCm = (largo * ancho * alto)/2;
    let Litros = volumenCm * 0.001;

    alert("El volumen de la pecera triangular es de " + Litros + " litros.");
});
