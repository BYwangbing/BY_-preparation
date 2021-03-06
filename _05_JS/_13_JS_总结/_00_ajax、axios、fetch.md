axios 和 ajax 都是对 XMLHttpRequest 这个对象的封装；
而 fetch 则是 window 下的一个方法，它是由浏览器端提供的获取资源的接口,是一个更底层的方法

## ajax

1. 本身是针对 MVC 的编程,不符合现在前端 MVVM 的浪潮
2. 基于原生的 XHR 开发，XHR 本身的架构不清晰，已经有了 fetch 的替代方案
3. JQuery 整个项目太大，单纯使用 ajax 却要引入整个 JQuery 非常的不合理

重点就是首先实例一个 XMLHttpRequest 对象，用其中的 open 方法建立连接；
send 方法传输数据（前端传到后台）；
然后再利用 onreadystatechange 监听 readyState 的变化，当其为 4 时，代表请求完成

## axios

axios 其实就是在 ajax 的基础上加了 promise

axios 是一个基于 Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：

1. 从浏览器中创建 XMLHttpRequest
2. 从 node.js 发出 http 请求
3. 支持 Promise API
4. 拦截请求和响应
5. 转换请求和响应数据
6. 取消请求
7. 自动转换 JSON 数据
8. 客户端支持防止 CSRF/XSRF

## fetch

1. 符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
2. 脱离了 XHR，是 ES 规范里新的实现方式
3. 更好更方便的写法
4. 更加底层，提供的 API 丰富（request, response）
5. fetch 只对网络请求报错，对 400，500 都当做成功的请求，需要封装去处理
6. fetch 默认不会带 cookie，需要添加配置项
7. fetch 没有办法原生监测请求的进度，而 XHR 可以

说明：

- a. fetch api 返回的是一个 promise 对象
- b. Options:
  - method(String): HTTP 请求方法，默认为 GET
  - body(String): HTTP 的请求参数
  - headers(Object): HTTP 的请求头，默认为{}
  - credentials(String): 默认为 omit,忽略的意思，也就是不带 cookie;还有两个参数，same-origin，意思就是同源请求带 cookie；include,表示无论跨域还是同源请求都会带 cookie
- 必须在 header 参数里面加上 `credentials: 'include'`，才会如 xhr 一样将当前 cookies 带到请求中去
