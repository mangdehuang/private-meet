/**
 * @description 数组去重
 * @param {*} arr
 */
// function unique(arr) {
//     var newArr = [];
//     for (var i = 0, len = arr.length; i < len; i++) {
//         if (arr.indexOf(arr[i]) == i) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// function unique(arr) {
//     return arr.filter(function (value, index) {
//         return arr.indexOf(value) == index;
//     });
// }

// var arr = [1, 1, "1", "a", "b", "a", 3];
// console.log(unique(arr));

//闭包
// var fun = function() {
//   var i = 0;
//   return function() {
//     console.log(i++);
//   };
// };
// var f1 = fun();
// var f2 = fun();
// f1();
// f1();
// f2();
//010

var length = 10;
var fun = function() {
  console.log(this);
  console.log(this.length);
};
var obj = {
  length: 5,
  fun1: function(fn) {
    fn();
    arguments[0]();
  }
};
obj.fun1(fun, 1);
//10 this指向window   2 argruments.length
