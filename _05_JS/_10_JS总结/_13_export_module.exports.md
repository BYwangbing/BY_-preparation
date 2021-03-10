# node 模块

Node 里面的模块系统遵循的是 CommonJS 规范

> CommonJS 定义的模块分为: 模块标识(module)、模块定义(exports) 、模块引用(require)

require 用来加载代码，而 exports 和 module.exports 则用来导出代码

尽量都用 module.exports 导出，然后用 require 导入。

- require 导出的内容是 module.exports 的指向的内存块内容，并不是 exports 的
- module.exports 初始值为一个空对象 {}
- exports 是指向的 module.exports 的引用 辅助后者添加内容用的
- require() 返回的是 module.exports 而不是 exports

# export 和 export default

1. export 与 export default 均可用于导出常量、函数、文件、模块等
2. 在一个文件或模块中，export、import 可以有多个，export default 仅有一个
3. 通过 export 方式导出，在导入时要加{ }，export default 则不需要
4. export 能直接导出变量表达式，export default 不行。

## 比较 CommonJS 规范 和 ES6 模块化规范

一 对于基本数据类型和复杂数据类型的使用方式不同；

1.  CommonJS
    （1）对于基本数据类型，采用复制副本的方式（不影响原值）
    （2）对于复杂数据类型，采用对象引用的方式（修改时影响原值）
2.  ES6
    （1）ES6 中，基本/复杂类型都属于“动态只读引用”
    只读：不论是基本数据类型还是复杂数据类型，只要 import 进来的变量，都是只读的；
    动态：原模块中的值发生变化，import 加载的值 也会发生变化，不论是基本数据类型还是复杂数据类型
    （2）原理：
    当 import 引入一个模块时，就会生成一个指向原模块对象的只读引用。脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

二 当加载同一个模块时，CommonJS 是在首次加载时执行。而 ES6 会先分析模块依赖关系，才按依赖关系执行。

- CommonJS 会按引入顺序执行模块里面的内容，且多次被引入模块只执行一次；
- ES6 会先判断引入的顺序，先执行先被被引入的模块的内容，后执行主模块内容，且相同引入的模块也不再重复执行
