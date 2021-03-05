const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mas: [],
    
  getLength() {
    
    return this.mas.join('~~').length;
  },
  addLink(value) {
    console.log(value);  
    value = String(value);
    if (value) {
        this.mas.push(`( ${value} )`);
    } else {
        this.mas.push ('( )');
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
        this.mas.length = 0;
        throw 'Error';
    } 
    if (position < this.mas.length && position == Math.round(position)) {  
        this.mas.splice(position - 1, 1);
        return this;
    } else {
        this.mas.length = 0;
        throw 'Error';
    }
  },
  reverseChain() {
    this.mas = this.mas.reverse();  
    return this;
  },
  finishChain() {
    let res = this.mas.join('~~').trim();
    this.mas.length = 0;
    return res;  
  }
};

module.exports = chainMaker;
