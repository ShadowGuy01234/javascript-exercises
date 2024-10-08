function removeFromArray(array, ...args) {
    return array.filter(x => !args.includes(x))
};


console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
