/*
Object.defineProperty()会直接在一个对象上定义新属性，或者说修改一个对象的现有属性，并返回该对象。
参数：
  Obj:要在其上定义属性的对象。
  prop:要定义或修改的属性的名称。
  descriptor:将被定义或修改的属性描述符。

configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。

enumerable
当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中，
白话就是能不能被for..in和Object.keys()循环打印出来。默认为 false。

value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。

writable
当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。

get
一个给属性提供 getter 的方法，如果没有 getter 则为undefined。
当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象
（由于继承关系，这里的this并不一定是定义该属性的对象）。默认为undefined。

set
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。
当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。默认为 undefined。
*/

/*
    <input type="text" id="tex">
    <span id="content"></span>
*/

(function () {
  var JsModel = function () {
    var obj = {};
    Object.defineProperty(obj, 'txt', {
      get: function () {
        return obj;
      },
      set: function (newValue) {
        document.querySelector('#tex').value = newValue;
        document.querySelector('#content').textContent = newValue;
      },
    });
    this.init = function () {
      document.querySelector('#tex').addEventListener('keyup', function (e) {
        obj.txt = e.target.value;
      });
    };
  };
  var model = new JsModel();
  model.init();
})();
