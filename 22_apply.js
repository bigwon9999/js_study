//객체는 속성을 가지고 있음
//속성 값이 저장되어 있으면 속성이라 하고
//속성에 함수가 들어있으면 메소드라고 부른다
function sum(arg1,arg2){
  return arg1+arg2;
}
sum(1,2);
sum(4,2);
sum.apply(null,[4,2]); //6
sum.apply(null,[1.2]); //3
