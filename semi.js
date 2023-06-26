document.getElementById('pecera Semicircular').addEventListener('submit', function (event) {
    event.preventDefault();

    let radio = parseInt(document.getElementById('radio').value);
    let alto = parseInt(document.getElementById('alto').value);

    let volumenCm = alto * 3.1415 * (radio*radio)/2;
    let Litros = volumenCm * 0.001;

    alert("El volumen de la pecera cilíndrica es de " + Litros + " litros.");
});