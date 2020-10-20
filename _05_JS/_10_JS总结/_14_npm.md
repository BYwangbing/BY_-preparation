+ -S 与 --save 的简写，安装包信息会写入 `dependencies` 中
+ -D 与 --save-dev 的简写，安装包写入 `devDependencies` 中

+ dependencies 生产阶段的依赖,也就是项目运行时的依赖
+ devDependencies 开发阶段的依赖，就是我们在开发过程中需要的依赖，只在开发阶段起作用的

## npm install
+ 会下载dependencies和devDependencies中的模块，
+ 当使用npm install –production或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。
+ npm install 单个模块：安装到node_modules目录中，但不会保存在package.json 中。之后运行npm install命令时，不会自动安装该模块。

## npm install --save
+ 安装到node_modules目录中，保存在package.json中dependencies字段下，安装生产环境依赖的模块，即项目运行时的模块，例如react，react-dom,jQuery等类库或者框架。
+ 运行npm install，或者npm install --production或者注明NODE_ENV变量值为production时时，会将这些模块自动安装到node_modules中。

## npm install --save-dev
+ 安装到node_modules目录中，保存在package.json中devDependencies字段下，安装开发环境依赖的模块，即项目开发时的模块，例如babel（转码器，可以将ES6代码转为ES5代码）等一些工具，只需在开发环境是用到。
+ 运行npm install，会将这些模块自动安装到node_modules中，但运行npm install --production或者注明NODE_ENV变量值为production时时，不会将这些模块自动安装到node_modules中。