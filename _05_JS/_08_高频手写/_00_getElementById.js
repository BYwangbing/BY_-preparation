function $() {
  var elements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string') element = document.getElementById(element);
    if (arguments.length == 1) return element;
    elements.push(element);
  }
  return elements;
}

// 题目：实现一个函数，效果同 document.getElementById（通过遍历 node.childNodes 和 node.id 属性实现）
function getElementById(findId) {
  var star = document.body;
  function find(node, id) {
    for (let item in Array.from(node.childNodes)) {
      if (item.id === id) {
        return item;
      } else {
        return find(node.childNodes);
      }
    }
  }
  return find(star, findId);
}
