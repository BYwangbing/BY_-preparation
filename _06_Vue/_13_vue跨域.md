>跨域指浏览器不允许当前页面的所在的源去请求另一个源的数据。源指协议，端口，域名。只要这个3个中有一个不同就是跨域
vue-cli3.0项目使用proxy跨域
+ .使用http-proxy-middleware 代理解决
+ 首先在根目录创建vue.config.js文件，这个配置文件在运行项目的时候自动加载
```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://xxxx/device/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```
这个文件还可以配置其它信息，比如修改端口号，默认是8080等等。

最后在页面发送请求的时候：

```js
axios.get('/api/getDataPoint').then(res => {
  console.log(res)
})
```
## 多环境运行
开发，生产，测试等 vue-cli2是可以直接在config文件中进行配置的，但是vue-cli3已经简化了，官方文档也有进行配置的说明，实现具体有以下2种方法，我比较偏向第二种。

.在config文件新建index.js文件，根据全局的环境变量来进行判断，并进行输出
```js
// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'http://xxx:9091/pro/',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://xxxx:9091/dev/',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://xxxx:9091/test/',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]
```
```json
 "scripts": {
    "dev": "vue-cli-service serve", 
    "test": "vue-cli-service serve --mode test",
    "build": "vue-cli-service build",
    "build:test": "vue-cli-service build --mode test",
    "lint": "vue-cli-service lint"
  },
```