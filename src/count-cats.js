const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let row = matrix.reduce(function(pritem, item) {
    return pritem.concat(item);             
      }, []);  
    return row.reduce(function(pritem, item){
      if (item == '^^') {
          console.log(item);
          return pritem +=1;
      } else { return pritem;}
  }, 0);
};
