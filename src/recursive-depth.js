const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr);
    if (!Array.isArray(arr))  {
        return 0;
    } else{
        let count = [];
        for (let item of arr) {
            count.push(this.calculateDepth(item));
            console.log(count);
        }
        return 1 + Math.max(0, ...count);
    }
  }
};