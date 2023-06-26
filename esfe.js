
function calcularEsfera(){
    let radio = parseInt(document.getElementById('radio').value);

    let volumenCm = 67/16 * Math.pow(radio, 3);
    let Litros = volumenCm * 0.001;

    alert("El volumen de la pecera esferica es de " + Litros + " litros.");
}
