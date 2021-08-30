var arr = {"a","b","c"};
console.log('Object.keys(arr)', Object.keys(arr));
var o = {"name":"egoing","age":20,"city":"seoul"};
Object.keys(o);
///Object API 사용. 키 값을 배열로 리턴

var o = new Object();
console.log('o.toString()',o.toString());
//object.prototype.toString()

var a = new Array(1,2,3);
console.log('a.toString()',a.toString());
////

//오브젝트 확장
Object.prototype.contain = function(needle){
  for(var name in this){
    if(this[name] === needle){
      return true;
    }
  }
  return false;
}
var o = {'name':'egoing', 'city':'seoul'};
//console.log(o.contain('egoing'));
var a = ['egoing', 'leezche', 'grapittie'];
//console.log(a.contain('leezche'));

  //모든 객체에 영향을 줌 오브젝트 확장의 위험성
for(var name in a){

  if(a.hosOwnProperty(name)){
    console.log(name)
  } //해결법

//  console.log(name); // name, city, contain 이라고 나옴
}


//원시 데이터 타입 , 레퍼 객체
/* 문자열은 객체다 프로퍼티,메소드가 있음
내부적으로 원시 데이터 타입
객체인 것 처럼 동작해야지만 저러한 작업이 가능함
따라서 자바스크립트는 임시로 문자열 객체를 만들고 사용 후 제거*/
