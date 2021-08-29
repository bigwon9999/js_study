function func(){
  if(window===this){
    document.write("window === this");
  }
}
func();
//함수에서의 this
