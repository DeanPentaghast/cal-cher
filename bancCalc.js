const numArray = [950, 1340, 1760];
const numObjective = 0;
const keysArray = [];
for (i=1; i<51; i++) {
    keysArray.push('num' + i);
}

const possibleNums = {
    num1: [950],
    num2: [1340],
    num3: [1760],
    num4: [950, 950],
    num5: [950, 1340],
    num6: [1340, 1340],
    num7: [950, 1760],
    num8: [950, 950, 950],
    num9: [1340, 1760],
    num10: [950, 950, 1340],
    num11: [1760, 1760],
    num12: [950, 1340, 1340],
    num13: [950, 950, 1760],
    num14: [950, 950, 950, 950],
    num15: [1340, 1340, 1340],
    num16: [950, 1340, 1760],
    num17: [950, 950, 950, 1340],
    num18: [1340, 1340, 1760],
    num19: [950, 1760, 1760],
    num20: [950, 950, 1340, 1340],
    num21: [950, 950, 950, 1760],
    num22: [950, 950, 950, 950, 950],
    num23: [1760, 1340, 1760],
    num24: [950, 1340, 1340, 1340],
    num25: [950, 1340, 1340, 1340],
    num26: [950, 950, 1340, 1760],
    num27: [950, 950, 950, 950, 1340],
    num28: [1760, 1760, 1760],
    num29: [1340, 1340, 1340, 1340],
    num30: [950, 950, 1760, 1760],
    num31: [950, 950, 950, 1340, 1340],
    num32: [950, 950, 950, 950, 1760],
    num33: [1340, 1340, 1340, 1760],
    num34: [950, 1340, 1760, 1760],
    num35: [950, 950, 1340, 1340, 1340],
    num36: [950, 950, 950, 1340, 1760],
    num37: [1340, 1340, 1760, 1760],
    num38: [950, 1760, 1760, 1760],
    num39: [950, 1340, 1340, 1340, 1340],
    num40: [950, 950, 1340, 1340, 1760],
    num41: [950, 950, 950, 1760, 1760],
    num42: [1340, 1760, 1760, 1760],
    num43: [1340, 1340, 1340, 1340, 1340],
    num44: [950, 1340, 1340, 1340, 1760],
    num45: [950, 950, 1760, 1760, 1340],
    num46: [1340, 1340, 1340, 1340, 1760],
    num47: [950, 950, 1760, 1760, 1760],
    num48: [950, 1760, 1760, 1760, 1340],
    num49: [950, 1760, 1760, 1760, 1760],
    num50: [1760, 1760, 1760, 1760, 1760]
}

//console.log(possibleNums[keysArray[5]].reduce((a, b) => a + b, 0));

for (j=0; j<50; j++){
    var actualNum = possibleNums[keysArray[j]].reduce((a, b) => a + b, 0);
    //console.log(actualNum);
}

function calcBanq(){
    var banq = parseFloat(document.getElementById('wantedBanq').value);
    for (j=0; j<49; j++){
        var actualNum = possibleNums[keysArray[j]].reduce((a, b) => a + b, 0);
        if (banq <= 950){
            document.getElementById('result2').innerHTML = ('950');
            break;
        } else if (actualNum > banq) {
            document.getElementById('result2').innerHTML = ((possibleNums[keysArray[(j-1)]]) + ' = ' + (possibleNums[keysArray[(j-1)]].reduce((a, b) => a + b, 0)) + '<br>' + (possibleNums[keysArray[j]]) + '=' + (possibleNums[keysArray[j]].reduce((a, b) => a + b, 0)));
            break;
        };
    };
};
