var person1={
  'name':'egoing',
  'introduce':function(){
    return 'My nme is '+this.name;
  }
}
var person2 = {
  'name' : 'leezche',
  'introduce' : function(){
    return 'My name is '+this.name;
  }
}

function Person(name){
  this.name = name;
  this.introduce = function(){
    return 'my name is ' + this.name;
  }
} //생성자 초기화 객체기  어떤 속성, 메소드를 갖고 있는지
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");

var p2 = new Person('leezche');
document.write(p2.introduce());
// //console
// function person(){}
// var p0=person();
// p0 //undefined
// var p = new Person(); ->new 붙은 함수 = 객체의 생성자
// p // Person{}
