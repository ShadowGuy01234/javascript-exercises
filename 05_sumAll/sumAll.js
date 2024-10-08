const sumAll = function(n1, n2) {
    let sum = 0;
    if (Number.isInteger(n1) == true && Number.isInteger(n2) == true && n1 > 0 && n2 > 0) {
        if (n2 > n1) {
            for (let i = n1;i <= n2;i++) {
                sum += i;
            }
        }
        if (n1 > n2) {
            for (let i = n2;i <= n1;i++) {
                sum += i;
            }
        }
    }
    else {
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
