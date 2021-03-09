/*需求:编写一个函数，将如下字符串'get-element-by-id'修改为驼峰表示法'getElementById'*/
function transformStr(str) {
  let newStr = '';
  let arr = str.toString().split('-');
  for (let i = 0, length = arr.length; i < length; i++) {
    if (i === 0) {
      newStr += arr[i];
    } else {
      newStr += arr[i].substr(0, 1).toLocaleUpperCase() + arr[i].substr(1);
    }
  }
  return newStr;
}

function _transformStr(str) {
  // \w 元字符用于查找单词字符。
  return str.replace(/-\w/g, function (x) {
    return x.slice(1).toLocaleUpperCase();
  });
}
let strHump = 'get-element-by-id';
console.log(_transformStr(strHump));

//短横线命名的变量转成驼峰命名
function dashToCamel(str) {
  return str.replace(/-([a-z])/g, function (keb, item) {
    return item.toUpperCase();
  });
}

function change(string) {
  var str = string.split('-');
  for (let i = 1; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join('');
}

// JSON对象的key值转换为驼峰式
function jsonToHump(obj) {
  if (obj instanceof Array) {
    obj.forEach(function (v, i) {
      jsonToHump(v);
    });
  } else if (obj instanceof Object) {
    Object.keys(obj).forEach(function (key) {
      var newKey = underline2Hump(key);
      if (newKey !== key) {
        obj[newKey] = obj[key];
        delete obj[key];
      }
      jsonToHump(obj[newKey]);
    });
  }
}
