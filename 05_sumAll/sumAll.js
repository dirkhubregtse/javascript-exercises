const sumAll = function (firstNumber, secondNumber) {
    let total = 0;
    if (typeof firstNumber === 'number' &&  typeof secondNumber === 'number') {

        if ((firstNumber < 0) || (secondNumber < 0)) {
            return "ERROR";
        }
        if (firstNumber)
            if (secondNumber > firstNumber) {
                let range = secondNumber - firstNumber;
                let i = firstNumber;
                for (i; i < (secondNumber + 1); i++) {
                    total = total + i;
                }
            } else {
                let range = firstNumber - secondNumber;
                let i = secondNumber;
                for (i; i < (firstNumber + 1); i++) {
                    total = total + i;
                }
            }
    } else {
        return "ERROR";
    }
    return total;
};

const checkIfNumber = function (number) {
    return typeof value === 'number';

}

// Do not edit below this line
module.exports = sumAll;
