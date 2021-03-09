/*需求:编写一个函数，将如下字符串驼峰表示法'getElementById'修改为'get-element-by-id'*/
function transformStr(str) {}

function _transformStr(str) {
  // \w 元字符用于查找单词字符。
  return str.replace(/-\w/g, function (x) {
    return x.slice(1).toLocaleUpperCase();
  });
}
let strHump = 'get-element-by-id';
console.log(_transformStr(strHump));

//驼峰命名的变量转成短横线命名
function camelToDash(str) {
  return str.replace(/[A-Z]/g, function (item) {
    return '-' + item.toLowerCase();
  });
}
console.log(camelToDash('userNameAgeEmail'));

// 驼峰转换为短横线
function fun2(data) {
  return data
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .slice(1);
}
//或者为：
function hump2Underline(s) {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// JSON对象的key值转换为下划线格式
function jsonToUnderline(obj) {
  if (obj instanceof Array) {
    obj.forEach(function (v, i) {
      jsonToUnderline(v);
    });
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function (key) {
      var newKey = hump2Underline(key);
      if (newKey !== key) {
        obj[newKey] = obj[key];
        delete obj[key];
      }
      jsonToUnderline(obj[newKey]);
    });
  }
}
