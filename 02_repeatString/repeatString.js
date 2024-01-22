let outputString = "";

const repeatString = function(string, num) {

    for (let i = 0; i < num; i++) {
        outputString = outputString + string;
    }
    if (num < 0){  
        return "ERROR";
    } else {
        return outputString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
