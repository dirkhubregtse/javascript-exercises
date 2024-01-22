const reverseString = function(stringetje) {
    //split
    let splitStringetje =  stringetje.split("");
    //reverse
    let revStringetje = splitStringetje.reverse();
    //join
    let joinStringetje = revStringetje.join("");
    
    return joinStringetje;

};

// Do not edit below this line
module.exports = reverseString;

