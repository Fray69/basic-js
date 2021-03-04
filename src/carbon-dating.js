const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'undefined') { return false;} 
  let chr = /[0-9.]/g;
  if (typeof sampleActivity != 'string') {return false;}    
  if (sampleActivity.match(chr) === null) { return false;}
  if (sampleActivity.match(chr).length != sampleActivity.length || sampleActivity.length == 0) {return false;}
  if (Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) {return false;}               
  let func = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));

  return func;
};
