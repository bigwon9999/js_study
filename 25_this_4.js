//함소의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다
function sum(x,y){
  return x+y;
}//객체
sum(1,2); //3
var sum2 = new function('x','y','return x+y;'); //함수리터럴
sum2(1,2); //3
