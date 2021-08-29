function zero(){
  console.log(
    'zero.length', zero.length,
    'arguments', arguments.length
  );
}//length 0 arguments 0
function one(arg1){
  console.log(
    'one.length',one.length,
    'arguments', arguments.length
  );
}

function two(arg1,arg2){
  console.log(
    'two.length', two.length,
    'arguments', arguments.length
  );
}
zero(); //매개변수 없고, 인자 없는 상태 0,0
one('val1','val2'); //매개변수 1개, 인자 2개one.length 1 arguments 2
two('val1'); //매개변수 2개, 인자 1개 2, 1
