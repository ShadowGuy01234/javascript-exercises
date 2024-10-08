const reverseString = function(string) {
    const split = string.split("");
    let n = string.length;
    let word = "";
    for (let i = 1;i <= n;i++) {
        let reversed = split[n - i];
        word += reversed;
    }
    return word;
};

// Do not edit below this linelet n = string.length();
module.exports = reverseString;
