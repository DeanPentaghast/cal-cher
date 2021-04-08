function calcRoble() {
    var altSala = parseFloat(document.getElementById('alturaSala').value);
    var longPol = parseFloat(document.getElementById('longPol').value);
    var longBanq = parseFloat(document.getElementById('longBanq').value);
    var supMax = (longPol - longBanq) * altSala;
    var supMin = longBanq * (altSala - 1);
    var obj = {
        longitudPol: longPol,
        longitudBanq: longBanq,
        alturaSala: altSala
    };
    console.log(obj);
    return document.getElementById('result').innerHTML = (supMax + supMin).toFixed(2) + 'm2';
};

function calcListones() {
    var altSala = parseFloat(document.getElementById('alturaSala').value);
    var longPol = parseFloat(document.getElementById('longPolList').value);
    return document.getElementById('result1').innerHTML = (altSala * longPol).toFixed(2) + 'm2';
};

