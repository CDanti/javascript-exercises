const sumAll = function(a,b) {
    let minNum = a;
    let maxNum = b;
    if (a <= 0 || b <= 0 || typeof a != "number" || typeof b != "number"){
        return "ERROR";
    }
    else if (a>b){
        minNum = b;
        maxNum = a;
        theSumming(minNum, maxNum)
    }
    else{
        return theSumming(minNum, maxNum);
    }
};

function theSumming(minNum, maxNum){
    let final = 0;
    for (i = minNum; i < maxNum + 1; i++){
        final += i;
    };
    return final;
}

// Do not edit below this line
module.exports = sumAll;

// if (a <= 0 || b <= 0){
//     return "ERROR"
// };
// if (typeof a != Number || typeof b != Number){
//     return "ERROR"
// };
// if (a>b){
//     minNum = b;
//     maxNum = a;
// };