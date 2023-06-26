document.getElementById('pecera recpano').addEventListener('submit', function (event) {
    event.preventDefault();

    let radio = parseInt(document.getElementById('radio').value);
    let alto = parseInt(document.getElementById('alto').value);
    let largo = parseInt(document.getElementById('largo').value);
    let ancho = parseInt(document.getElementById('ancho').value);

    let volumenSemiCm = alto * 3.1415 * (radio*radio)/2;
    let volumenRecCm = largo * ancho * alto;
    let LitrosSemi = volumenSemiCm * 0.001;
    let LitrosRec = volumenRecCm * 0.001;
    let Litros = LitrosSemi + LitrosRec;

    alert("El volumen de la pecera cilíndrica es de " + Litros + " litros.");
});