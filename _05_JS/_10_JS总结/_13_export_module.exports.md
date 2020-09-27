# node模块
Node里面的模块系统遵循的是CommonJS规范

> CommonJS定义的模块分为: 模块标识(module)、模块定义(exports) 、模块引用(require)

require 用来加载代码，而 exports 和 module.exports 则用来导出代码

尽量都用 module.exports 导出，然后用require导入。

+ require导出的内容是module.exports的指向的内存块内容，并不是exports的
+ module.exports 初始值为一个空对象 {}
+ exports 是指向的 module.exports 的引用 辅助后者添加内容用的
+ require() 返回的是 module.exports 而不是 exports

# export 和 export default
1. export 与 export default均可用于导出常量、函数、文件、模块等
2. 在一个文件或模块中，export、import可以有多个，export default仅有一个
3. 通过export方式导出，在导入时要加{ }，export default则不需要
4. export能直接导出变量表达式，export default不行。
