/**
 * @param {string} s
 * @return {number}
 */

const symbol = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
}

const romanToInt = function(s) {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (symbol[s[i]+s[i+1]]) {
            ans += Number(symbol[s[i]+s[i+1]]);
            i += 1
            continue;
        }
        if (symbol[s[i]]) {
            ans += Number(symbol[s[i]])
        }
    }
    return ans;
};
