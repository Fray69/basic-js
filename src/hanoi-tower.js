const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resal = {turns: 0, seconds: 0};
  resal.turns = 2 ** disksNumber - 1;
  resal.seconds = Math.floor(data.turns/turnsSpeed * 3600);
  return resal;
};
