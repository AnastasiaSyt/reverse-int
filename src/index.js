module.exports = function reverse(n) {
    const digitsArray = Array.from(String(Math.abs(n)));
    return Number(digitsArray.reverse().join(''));
}
