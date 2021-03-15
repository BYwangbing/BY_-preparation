## JavaScript模块化CommonJS/AMD/CMD/UMD/ES6Module的区别
原始的开发方式 ---> CommonJS ---> AMD ---> CMD ---> UMD ---> ES6Module

### CommonJS && node.js
- CommonJS规范，主要运行于服务器端，同步加载模块，而加载的文件资源大多数在本地服务器，所以执行速度或时间没问题。Node.js很好的实现了该规范。
- 该规范指出，一个单独的文件就是一个模块。模块功能主要的几个命令：require和module.exports。
- require命令用于输入其他模块提供的功能，
- module.exports命令用于规范模块的对外接口，输出的是一个值的拷贝，输出之后就不能改变了，会缓存起来。
- require(moduleId)来加载其他模块的内容，其返回值就是其引用的外部模块所暴露的API，之后再通过module.exports或者exports来为当前模块的方法和变量提供输出接口。

## AMD && Require.js
- AMD(异步加载模块定义)规范，制定了定义模块的规则,一个单独的文件就是一个模块，模块和模块的依赖可以被异步加载。
- 主要运行于浏览器端，这和浏览器的异步加载模块的环境刚好适应，它不会影响后面语句的运行。
- 模块功能主要的几个命令：define、require、return和define.amd。
  - define是全局函数，用来定义模块,define(id?, dependencies?, factory)。
  - require命令用于输入其他模块提供的功能，
  - return命令用于规范模块的对外接口，
  - define.amd属性是一个对象，此属性的存在来表明函数遵循AMD规范。
- define来定义模块，return来输出接口， require来加载模块
- AMD的运行逻辑是：提前加载，提前执行。在Requirejs中，申明依赖模块时，会第一时间加载并执行模块内的代码，使后面的回调函数能在所需的环境中运行

## CMD && Sea.js
- CMD(通用模块定义)规范主要是Sea.js推广中形成的，一个文件就是一个模块，可以像Node.js一般书写模块代码。
- 主要在浏览器中运行，当然也可以在Node.js中运行。
- 如果要使用某模块，可以通过require来获取该模块提供的接口
- define是一个全局函数，用来定义模块，并通过exports向外提供接口
- 通过exports暴露接口 通过require引入依赖
- CMD推崇依赖就近，延迟执行。在上面例子中，通过require引入的模块，只有当程序运行到此处的时候，模块才会自动加载执行。

## ES6 Module && ES6
1. 它因为是标准，所以未来很多浏览器会支持，可以很方便的在浏览器中使用。
2. 它同时兼容在node环境下运行。
3. 模块的导入导出，通过import和export来确定。
4. 可以和Commonjs模块混合使用。
5. CommonJS输出的是一个值的拷贝。ES6模块输出的是值的引用,加载的时候会做静态优化。
6. CommonJS模块是运行时加载确定输出接口，ES6模块是编译时确定输出接口。
7. ES6模块功能主要由两个命令构成：import和export。
8. import命令用于输入其他模块提供的功能。export命令用于规范模块的对外接口。