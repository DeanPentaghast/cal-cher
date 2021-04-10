const numArray = [950, 1340, 1760];
const numObjective = 0;
const keysArray = [];
for (i=1; i<50; i++) {
    keysArray.push('num' + i);
}

const possibleNums = {
    num1: [950],
    num2: [1340],
    num3: [1760],
    num4: [950, 950],
    num5: [950, 1340],
    num7: [1340, 1340],
    num6: [950, 1760],
    num10: [950, 950, 950],
    num8: [1340, 1760],
    num11: [950, 950, 1340],
    num9: [1760, 1760],
    num13: [950, 1340, 1340],
    num12: [950, 950, 1760],
    num20: [950, 950, 950, 950],
    num16: [1340, 1340, 1340],
    num14: [950, 1340, 1760],
    num21: [950, 950, 950, 1340],
    num17: [1340, 1340, 1760],
    num15: [950, 1760, 1760],
    num23: [950, 950, 1340, 1340],
    num22: [950, 950, 950, 1760],
    num33: [950, 950, 950, 950, 950],
    num18: [1760, 1340, 1760],
    num26: [950, 1340, 1340, 1340],
    num26: [950, 1340, 1340, 1340],
    num24: [950, 950, 1340, 1760],
    num34: [950, 950, 950, 950, 1340],
    num19: [1760, 1760, 1760],
    num29: [1340, 1340, 1340, 1340],
    num25: [950, 950, 1760, 1760],
    num36: [950, 950, 950, 1340, 1340],
    num35: [950, 950, 950, 950, 1760],
    num30: [1340, 1340, 1340, 1760],
    num27: [950, 1340, 1760, 1760],
    num38: [950, 950, 1340, 1340, 1340],
    num37: [950, 950, 950, 1340, 1760],
    num31: [1340, 1340, 1760, 1760],
    num28: [950, 1760, 1760, 1760],
    num40: [950, 1340, 1340, 1340, 1340],
    num39: [950, 950, 1340, 1340, 1760],
    num44: [950, 950, 950, 1760, 1760],
    num32: [1340, 1760, 1760, 1760],
    num42: [1340, 1340, 1340, 1340, 1340],
    num41: [950, 1340, 1340, 1340, 1760],
    num45: [950, 950, 1760, 1760, 1340],
    num43: [1340, 1340, 1340, 1340, 1760],
    num46: [950, 950, 1760, 1760, 1760],
    num47: [950, 1760, 1760, 1760, 1340],
    num48: [950, 1760, 1760, 1760, 1760],
    num49: [1760, 1760, 1760, 1760, 1760]
}

//console.log(possibleNums[keysArray[5]].reduce((a, b) => a + b, 0));

for (j=0; j<49; j++){
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