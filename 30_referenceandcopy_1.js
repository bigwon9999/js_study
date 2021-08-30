var a = 1;
var b = a;
b=2
console.log(a); //1
///////////////////////복제

//참조
var a={'id':1};
var b=a;
b.id=2;
console.log(a.id); //2
//a, b 가 같은 객체를 가리키고 있음
//b에서 같은 객체인 id 를 바꿈
//2가 나옴
var a={'id':1};
var b=a;
b={'id':2}; //객체를 생성한 것임, b는 더이상 a와 같은 객체를
//가리키지 않게 되는 거
console.log(a.id); //1

//원시 데이터 타입을 인자로 넘겼을 때
var a = 1;
function func(b){
  b=2;
}
func(a);
console.log(a); //1

//참조 데이터 타입을 인자로 넘겼을 때
var a = {'id':1};
function func(b){
  b={'id':2}; //새로운 객체를 만든거임
}
func(a);
console.log(a.id); //1


var a ={'id':1};
function func(b){
  b.id=2;
}
func(a);
console.log(a.id); //2
