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
    num25: [950, 950, 1340, 1760],
    num26: [950, 950, 950, 950, 1340],
    num27: [1760, 1760, 1760],
    num28: [1340, 1340, 1340, 1340],
    num29: [950, 950, 1760, 1760],
    num30: [950, 950, 950, 1340, 1340],
    num31: [950, 950, 950, 950, 1760],
    num32: [1340, 1340, 1340, 1760],
    num33: [950, 1340, 1760, 1760],
    num34: [950, 950, 1340, 1340, 1340],
    num35: [950, 950, 950, 1340, 1760],
    num36: [1340, 1340, 1760, 1760],
    num37: [950, 1760, 1760, 1760],
    num38: [950, 1340, 1340, 1340, 1340],
    num39: [950, 950, 1340, 1340, 1760],
    num40: [950, 950, 950, 1760, 1760],
    num41: [1340, 1760, 1760, 1760],
    num42: [1340, 1340, 1340, 1340, 1340],
    num43: [950, 1340, 1340, 1340, 1760],
    num44: [950, 950, 1760, 1760, 1340],
    num45: [1760, 1760, 1760, 1760],
    num46: [1340, 1340, 1340, 1340, 1760],
    num47: [950, 950, 1760, 1760, 1760],
    num48: [950, 1760, 1760, 1760, 1340],
    num49: [950, 1760, 1760, 1760, 1760],
    num50: [1760, 1760, 1760, 1760, 1760]
}

//console.log(possibleNums[keysArray[5]].reduce((a, b) => a + b, 0));

for (j=0; j<51; j++){
    var actualNum = possibleNums[keysArray[j]].reduce((a, b) => a + b, 0);
    console.log(actualNum);
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
