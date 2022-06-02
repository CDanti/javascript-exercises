const sumAll = function(...args) {
    let minNum = 0;
    let maxNum = 0;
    args.forEach(item => {
        if (item < 0 || item.typeOf != Number){
            return 'ERROR'
        }
        else if (args[0] > args[1]){
            minNum = args[1]
            maxNum = args[0]
        }
    })
        return theSumming(minNum, maxNum);
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

// const sumAll = function(a, b) {
//     minNum = Math.min(a, b);
//     maxNum = Math.max(a, b);
//         if (minNum < 0 || minNum.typeOf != Number){
//             return 'ERROR'
//         }
//     let final = 0;
//     for (i = minNum; i < maxNum + 1; i++){
//         // x = minNum + i;
//         final += i;
//     };
//     return minNum;
// };

// function theSumming(minNum, maxNum){
//     let final = 0;
//     for (i = min; i < maxNum + 1; i++){
//         final += i;
//     };
//     return final;
// }

// // Do not edit below this line
// module.exports = sumAll;
