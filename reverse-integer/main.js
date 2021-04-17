/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a = String(x).split("").reverse();
    let e = a.slice(-1)[0];
    if (e === '-') {
        a.pop(); a.unshift(e);
    }
    
    let v = parseInt(a.join(""),10);
    if (Math.pow(-2, 31) < v && v < Math.pow(2, 31)-1) {
        return v;
    } 
    return 0;
};
