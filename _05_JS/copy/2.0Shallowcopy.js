// 手写浅拷贝
const arr1 = [1, 2, ['html', 'css'], 4];

const shallowClone = (arr) => {
  const dst = [];
  for (let prop in arr) { // for in  循环，也会循环原型链上的属性，所以这里需要判断一下
    if (arr.hasOwnProperty(prop)) {
        dst[prop] = arr[prop];
    }
  }
  return dst;
}

const arr2 = shallowClone(arr1);
arr2[2].push('Javascript');
arr2[3] = 5;

console.log(arr1);
// [ 1,2,['html','css','Javascript'], 4 ]
console.log(arr2);
// [1,2,['html','css','Javascript'], 5 ]





// 枚举性
let obj = [1,2,3,4,5];
console.log(Object.getOwnPropertyDescriptor(obj,'length'));
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }

// for in

Array.prototype.method=function(){
  　　console.log(this);
  }
  var myArray=[1,2,4,5,6,7]
  myArray.name="数组"
  for (var index in myArray) {
    console.log(myArray[index]);
  }