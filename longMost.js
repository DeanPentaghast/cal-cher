function calcMost () {
    var long = parseFloat(document.getElementById('longMost').value);
    var patasYBastidores = (long-40)/1040;
    document.getElementById('result3').innerHTML = (
        "- 1 pata izquierda<br>" + 
        "- " + Math.floor(patasYBastidores) + " patas centrales<br>" +
        "- 1 pata derecha<br>" +
        "- " + Math.floor(patasYBastidores) + " bastidores 1m<br>" +
        "- 2 barras de 1m"
    );
};