let ratioOfNums = require("../ratio/index");
let factorialOfNum = require("../factorial/index");

let ratioAndFactorial = (num1, num2, num3) => {
  let obj = {
    ratio: ratioOfNums(num1, num2),
    factorial: factorialOfNum(num3),
  };

  return obj;
};

module.exports = ratioAndFactorial;
