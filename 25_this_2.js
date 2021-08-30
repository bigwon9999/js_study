//메소드의 호출
//객체 소속인 메소드의 this는 그 객체를 가르킨다
var o = {
  func : function(){
    if(o === this){
      document.write("o === this");
    }
  }
}
o.func();
//func가 객체에 속해있지 않고 this 하면 window를 가리킨다
