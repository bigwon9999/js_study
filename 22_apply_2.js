
function sum(){
  var _sum =0;
  for(name in this){
    _sum+=this[name];
    // if(typeof this[name]!=='function')
    // {
    //   _sum+=this[name];
    // }
  }
  return _sum;
}
o1 = {val1:1, val2:2, val3:3, sum:sum}
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum}
// alert(o1.sum());
// alert(o2.sum());
alert(sum.apply(o1)) //6
alert(sum.apply(o2)) //185
