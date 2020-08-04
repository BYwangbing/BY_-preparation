  function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  
  function deepClone(source, hash = new WeakMap()) {
    if (!isObject(source)) return source;

    // 新增代码，查哈希表
    if (hash.has(source)) return hash.get(source);
  
    var target = Array.isArray(source) ? [] : {};
    // 新增代码，哈希表设值
    hash.set(source, target);
   
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (isObject(source[key])) {
          // 新增代码，传入哈希表
          target[key] = deepClone(source[key], hash);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  
  /**
   * @name 正常深拷贝测试
   */
  let a = {
    name: 'js',
    book: {
      title: '深拷贝学习',
      price: 'free',
    },
    a1: undefined,
    a2: null,
    a3: 123
  };
  const b = deepClone(a);
  b.name = 'JavaScript';
  b.book.title = '这是深拷贝哦';
  b.a3 = 456;

  console.log(a);

  console.log(b);

  
  /**
   * @name 解决死循环
   */
  const c = {
      name : "xiaoxiao",
      age : "16",
  };
  c.test = c;
  const d = deepClone(c);
  console.log(c);
  // { test: [Circular] }
  console.log(d);
  // { test: [Circular] }