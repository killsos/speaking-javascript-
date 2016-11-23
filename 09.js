var File = function(){
  var foo = 'test';
  function File(name){
     var x = name || foo;

     console.log(x);
  }


  //File(12);

  //File();

  return File;
}();

File();

console.log(foo);
