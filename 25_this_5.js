//함소의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다
var o = {}
var p = {}
function func(){
  switch(this){
    case o:
      document.write('o<br />');
      break;
    case p:
      document.write('p<br />');
      break;
    case window:
      document.write('window<br />');
      break;
    }
}
func(); //window
func.apply(o);
func.apply(p);
