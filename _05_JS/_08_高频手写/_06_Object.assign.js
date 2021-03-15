/*
实现一个 Object.assign 大致思路如下：

1、判断原生 Object 是否支持该函数，如果不存在的话创建一个函数 assign，并使用 Object.defineProperty 将该函数绑定到 Object 上。
2、判断参数是否正确（目标对象不能为空，我们可以直接设置{}传递进去,但必须设置值）
3、使用 Object() 转成对象，并保存为 to，最后返回这个对象 to
4、使用 for..in 循环遍历出所有可枚举的自有属性。并复制给新的目标对象(hasOwnProperty返回非原型链上的属性)
*/
Object.prototype.myAssigh = function (target, ...source) {
  for (let i = 0; i < source.length; i++) {
    if (!source[i]) {
      for (let key in source[i]) {
        if (source[i].hasOwnProperty(key)) {
          target[key] = source[i][key];
        }
      }
    }
  }
  return target;
};

// saucxs
if (typeof Object.assign2 !== 'function') {
  // 注意 1
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict';
      if (target == null) {
        // 注意 2
        throw new TypeError('Cannot convert undefined or null to object');
      }

      // 注意 3
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // 注意 2
          // 注意 4
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
  });
}
