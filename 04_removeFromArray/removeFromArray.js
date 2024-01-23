const removeFromArray = function(array, ...toBeRemoved) {
    const newArray = [];
    array.forEach(function(item) {
        if (!toBeRemoved.includes(item)){
            newArray.push(item);
        }
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
