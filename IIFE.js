var result = [];
// for (var i = 0; i < 5; i++) {
//   result.push(function() {return i})
// }
//console.log(result[0]());//5
//console.log(result[1]());//5
//变量没有存储 for循环执行完  i变成5

for (var j = 0; j < 5; j++) {
  (function () {
    var k = j;//闭包函数每次对j进行存储 
    result.push(function() {return k})
  }())
}
console.log(result[0]())//0
