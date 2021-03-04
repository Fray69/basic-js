const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false;}
  let sort = members.filter(function (item) {
    console.log(typeof item);
    return (typeof item === 'string');
    });

  return sort.map(function(item) {
    item = item.trim().toUpperCase();
    return item = item[0];   
    }).sort().join('');

};
