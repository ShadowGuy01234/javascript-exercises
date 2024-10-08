const removeFromArray = function(array, n1, n2) {
    let len = array.length
    for (let i = 0; i < len;i++) {
        if (array[i] == n1 || array[i] == n2) {
            array.splice([i], 1);
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
