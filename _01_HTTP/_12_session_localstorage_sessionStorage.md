https://blog.csdn.net/qq_42098849/article/details/104632898

https://blog.csdn.net/lizhengxv/article/details/81541977

- 存放位置： session 在服务器端，cookie 在客户端（浏览器）
- 存取方式： Cookie 中保存的是字符串，Session 保存的是对象
- session 默认被存在在服务器的一个文件里（不是内存）
- session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）
- session 可以放在 文件、数据库、或内存中都可以
- 用户验证这种场合一般会用 session

Session 对象用来存储特定用户会话所需的信息。 Session 由服务端生成，保存在服务器的内存、缓存、硬盘或数据库中。

典型的应用有：

- 判断用户是否登录。
- 购物车功能。

# 三者区别

## 生命周期：

- cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效
- localStorage：除非被手动清除，否则将会永久保存。
- sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。

## 存放数据大小：

- cookie：4KB 左右
- localStorage 和 sessionStorage：可以保存 5MB 的信息。

## HTTP 请求：

- cookie：每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题
- localStorage 和 sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信

## 易用性：

- cookie：需要程序员自己封装，源生的 Cookie 接口不友好
- localStorage 和 sessionStorage：源生接口可以接受，亦可再次封装来对 Object 和 Array 有更好的支持

## localstorage sessionStorage

- 同一浏览器的相同域名和端口的不同页面间可以共享相同的 localStorage
- 不同页面间无法共享 sessionStorage 的信息 页面仅指顶级窗口
- 如果一个页面包含多个 iframe 且他们属于同源页面，那么他们之间是可以共享 sessionStorage

## localstorage 超容量:

不存储数据, 也不会覆盖现有数据; 会报错引发异常。

1. 兼容性
2. localStorage 的值为 string 类型

```js
window.localStorage['a'] = 1; //第一种存储方式
window.localStorage.b = 2; //第二种存储方式
window.localStorage.setItem('c', 3); //第三种存储方式，推荐使用
```

3. 在浏览器隐私模式下不可读取
4. 不同浏览器无法共享 localStorage
5. 存储过多数据会导致页面变卡，因为 localStorage 的本质是对字符串的读取
6. localStorage 不能被爬虫获取
