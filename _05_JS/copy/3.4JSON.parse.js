const arr1 = [1, {username: '张三',},];
  
  let arr2 = JSON.parse(JSON.stringify(arr1));
  arr2[0] = 2;
  arr2[1].username = 'li';
  console.log(arr1);
  // [ 1, { username: '张三' } ]
  console.log(arr2);
  // [ 2, { username: 'li' } ]


// JSON.stringify()：将对象转成 JSON 字符串
// JSON.parse()：将字符串解析成对象

// 通过 JSON.parse(JSON.stringify()) 将 JavaScript 对象转序列化（转换成 JSON 字符串），
// 再将其还原成 JavaScript 对象，一去一来我们就产生了一个新的对象，而且对象会开辟新的栈，从而实现深拷贝。


// 注意，该方法的局限性：
// 1、不能存放函数或者 Undefined，否则会丢失函数或者 Undefined；
// 2、不要存放时间对象，否则会变成字符串形式；
// 3、不能存放 RegExp、Error 对象，否则会变成空对象；
// 4、不能存放 NaN、Infinity、-Infinity，否则会变成 null；