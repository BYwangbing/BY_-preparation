# 路由懒加载


# 启用压缩，让页面加载更快
gzip 文件压缩算法 ：直接将所有的静态资源压缩为gzip，极大的减少静态资源的大小，提升浏览器加载速度
### 添加vue.config.js 文件
>在新建Vue项目中，默认是没有vue.config.js文件的，首先你需要在项目根目录新建一个vue.config.js文件
### 配置compression-webpack-plugin
+ 安装 `compression-webpack-plugin`
+ 配置 修改vue.config.js文件
 ```js
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  configureWebpack: config => {
    if (isProd) {
      // 配置webpack 压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          // 超过4kb压缩
          threshold: 4096
        })
      )
    }
  }
}
```
+ 查看压缩效果
>在配置上面的压缩之后，执行yarn build命令，会发现生成的静态文件里面新增了后缀为gz的文件

如果此时将项目部署到已开启了gzip的服务器如nginx里面之后，访问浏览器即可看到浏览器下载的是已压缩的文件

# 移动端适配
移动端比较流行的两种适配方式: 一种是将px转换为rem,另一种是将px转换为vw

配置：
+ 安装 postcss-px-to-viewport
+ 配置移动端适配
```js
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      // 视窗的宽度，对应的是我们设计稿的宽度，我们公司用的是375
      viewportWidth: 375,
      // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      // viewportHeight: 1334,
      // 指定`px`转换为视窗单位值的小数位数
      unitPrecision: 3,
      // 指定需要转换成的视窗单位，建议使用vw
      viewportUnit: 'vw',
      // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      selectorBlackList: ['.ignore'],
      // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      minPixelValue: 1,
      // 允许在媒体查询中转换`px`
      mediaQuery: false
    }
  }
}
```
配置完之后，重启服务，在浏览器中审查元素，可以看到原来写的px都转换成了vw

# 移动端没法调试，需要 vConsole
### 安装vConsole
vConsole是腾讯开发的一个用于调试移动端项目的插件
### 在项目中使用
一般情况下vConsole只应用于开发环境，正式环境不会使用到
```js
// 开发环境下面使用vConsole进行调试
if (process.env.NODE_ENV === 'development') {
  const VConsole = require('vconsole')
  new VConsole()
}
```

# 生产环境删除console.log
### 安装插件
+ 需要安装`babel-plugin-transform-remove-console`插件
+ 配置babel.config.js
```js
// 所有生产环境
const prodPlugin = []

if (process.env.NODE_ENV === 'production') {
  
// 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
  prodPlugin.push([
    'transform-remove-console',
    {
      // 保留 console.error 与 console.warn
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
   plugins: [
     ...prodPlugin
   ]
}
```
