const isObjectValueEqual = (a, b) => {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) return false;
  for (let i = 0; i < aProps.length; i++) {
    let propsName = aProps[i];
    // 故先判断两边都有相同键名
    if (!b.hasOwnProperty(propsName)) return false;
    if (typeof aProps[propsName] === 'object') {
      if (this.isObjectValueEqual(aProps[propsName], bProps[propsName])) {
        continue;
      } else {
        return false;
      }
    } else if (aProps[propsName] !== bProps[propsName]) {
      return false;
    }
  }
  return true;
};

function _isObjectValueEqual(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  if (aProps.length != bProps.length) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    var propA = a[propName];
    var propB = b[propName];
    // 故先判断两边都有相同键名
    if (!b.hasOwnProperty(propName)) return false;
    if (typeof propA === 'object') {
      if (this.isObjectValueEqual(propA, propB)) {
        // return true     这里不能return ,后面的对象还没判断
      } else {
        return false;
      }
    } else if (propA !== propB) {
      return false;
    } else {
    }
  }
  return true;
}
