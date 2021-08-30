function Person(name){
  this.name=name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
  return 'My name is '+this.name;
}

function Programmer(name){
  this.name = name;
}
Programmer.prototype = new Person();
Programmer.prododype.coding = function(){
  return "hello world";
}

function Designer(name){
  this.name = name;
}
Designer.prototype = new Person();
Designer.prododype.design = function(){
  return "beautiful";
}

var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");


var p1 = new Programmer('leezche');
document.write(p1.introduce()+"<br />");
document.write(p1.design()+"<br />");
