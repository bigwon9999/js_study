function Ultra(){}
  Ultra.prototype.ultraProp=true; //true
function Super(){}
Super.prototype = new Ultra();

//var t = new Ultra();
//t.ultraProp=4;
//Super.prototype = 6; //6

function sub(){}
Sub.prototype = new Super();

//Sub.prototype.ultraProp = 2; 가 있으면 2

//var s = new Super();
//s.ultraProp = 3;
//Sub.prototype = s;
//가 되어있으면 3

var o = new Sub();
//   o.ultraProp=1; 이 있으면 1
console.log(o.ultraProp);
//prototype chain
//o->sub->Super->Ultra 순으로 뒤짐
