// var arr = new Array('Seoul','Tokyo','Paris','LA','Busan');
// function getRandomValueFromArray(arr){
//   var indexx = Math.floor(arr.length*Math.random());
//   return arr[index];
// }
//console.log(getRandomValueFromArray(arr));

Array.prototype.random = function(){
  var index = Math.floor(this.length*Math.random());
  return this[index];
}
var arr = new Array('Seoul','Tokyo','Paris','LA','Busan');
console.log(arr.random());
