const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separ = '+';
    let defaultaddsepar = '|';
    let res;
    if (options.hasOwnProperty('separator')) {separ = options.separator; }
    if (options.hasOwnProperty('additionSeparator')) { defaultaddsepar = options.additionSeparator; }
    if (options.hasOwnProperty('addition')) {
        let addition = options.addition + defaultaddsepar;
        let fullAddition = Array(options.additionRepeatTimes).fill(addition).join('');
        fullAddition = fullAddition.slice(0,fullAddition.length - defaultaddsepar.length);
        res = str + fullAddition + separ;
    } else { res = str + separ;}   
    
    let fulstr = Array(options.repeatTimes).fill(res).join('');
    fulstr = fullStr.slice(0,fulstr.length - separ.length);
    console.log(fulstr);
    return fulstr;
};
  