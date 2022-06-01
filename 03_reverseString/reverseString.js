const reverseString = function(string) {
    let result = '';
    let stringArray = string.split("");
    if (string.length > 0){
        for (let i=0; i <= string.length-1; i++){
            result = result + stringArray.at(-1);
            stringArray.pop();
        }
    }else{
        result = '';
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
