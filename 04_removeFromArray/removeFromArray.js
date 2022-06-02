const removeFromArray = function(myArray, ...args) {
    finalArray = []
    myArray.forEach(item => {
        if (!args.includes(item)){
            finalArray.push(item)
        }
    })
    return finalArray
};

//if (myArray.includes(num)){
    //     myArray.splice(myArray.indexOf(num),1)
    // }
    // else{
    //     myArray = myArray
    // }

// Do not edit below this line
module.exports = removeFromArray;
