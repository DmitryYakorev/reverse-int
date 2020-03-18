module.exports = function reverse (n) {
  //  let Array = [];
    //newArray = Array.map(n);
    //console.log(newArray);
    return Number(Math.abs(n).toString().split('').reverse().join(''));
}
