function shallowCopy(obj) {
  let data = {};
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      data[item] = obj[item];
    }
  }
  return data;
}

const arr = [1, 2, { name: '张三', age: '16' }];

// 法二: 展开运算符 ...obj
const newArr = [...arr];

// 法三: concat
const _newArr = arr.concat();

// 法四: slice
const _newArr1 = arr.slice();

// 法五: Object.assign
const newObj = Object.assign({}, obj);

// 可以看到的是，Object.assign() 对于第一层的数据来说，是深拷贝，对于第二层及以上的数据来说，是浅拷贝

/*
作者：牛客925174729号
链接：https://www.nowcoder.com/discuss/605673?source_id=discuss_experience_nctrack&channel=-1
来源：牛客网

浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。
如果属性是基本类型，拷贝的就是基本类型的值
如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。
*/
