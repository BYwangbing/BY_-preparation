// 没有原型的对象也是存在
/*
* Object.create(null) 创建的对象是一个空对象，
* 在该对象上没有继承 Object.prototype 原型链上的属性或者方法,
* 例如：toString(), hasOwnProperty()等方法
* Object.create()方法接受两个参数:Object.create(obj,propertiesObject) ;
* */