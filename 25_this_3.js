//생성자와 this
var funcThis = null;
function Func(){
  funcThis = this;
}
var o1 = Func();
if(funcThis === window){
  document.write('window </br>');
}
var o2 = new Func(); //생성자 호출
if(funcThis === o2){
  document.write('o2 </br>');
}
