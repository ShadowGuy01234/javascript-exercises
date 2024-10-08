const repeatString = function(string, n) {
    if (n < 0) return "ERROR";
    let word = "";
    for (let i = 0;i < n; i++) {
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
