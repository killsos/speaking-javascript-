var  repeat = function me (n,str){
  return n > 0 ? str + me( n - 1, str ) :'';
};

console.log(repeat(2,'abc'));  // abcabc

console.log(me);              // ReferenceError: me is not defined
