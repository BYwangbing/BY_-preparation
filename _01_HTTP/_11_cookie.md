![Image text](img/cookie.png)

https://www.cnblogs.com/milantgh/p/3651554.html

cookie服务器生成，保存到客户端
## cookie作用机制？
cookie是由服务器产生的，并由客户端和服务器使用
+ 首先，客户端会发送一个http请求到服务器端
+ 服务器端接受客户端请求后，发送一个http响应到客户端，这个响应头，其中就包含Set-Cookie头部
+ 如果客户端同意使用cookie，客户端第一次请求服务器时，服务器会创建一个带有id的cookie，并在发送响应时给header加一个属性：“set-cookie: jsessionid=XXXX” ，将cookie发送给客户端
+ 客户端收到响应后，将cookie保存在本地，比如浏览器。下次访问服务器时，将请求的cookie header加入cookie信息发送给服务器，服务器就可以根据客户端包装在请求中的cookie确定客户端身份

即： 用户在提交第一次请求后, 由服务器生成Cookie,并将其封装到响应头中,以响应的形式发送给客户端。
客户端接收到这个响应后,将Cookie 保存到客户端。
当客户端再次发送同类请求后，在请求中会携带保存在客户端的Cookie 数据，发送到服务端，由服务器对会话进行跟踪。

## Cookie 分类
+ Cookie总是保存在客户端中，按在客户端中的存储位置，可分为内存Cookie和硬盘Cookie.
+ 内存Cookie由浏览器维护，保存在内存中，浏览器关闭后就消失了，其存在时间是短暂的。
+ 硬盘Cookie保存在硬盘里，有一个过期时间，除非用户手工清埋或到了过期时间，硬盘Cookie不会被删除，其存在时间是长期的。
+ 所以，按存在时间，可分为非持久Cookie和持久Cookie。

cookie是由若干键值对构成: 
+ 键：name， 值：value；键值对均为字符串
+ Cookie 以名/值对形式存储

## JS设置cookie
JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie
### 创建 cookie: 
`document.cookie="username=John Doe";`
+ 为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）,默认情况下，cookie 在浏览器关闭时删除：
+ cookie的时效： expires
```js
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```
+ 使用 **path** 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面
```js
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```
### 读取 Cookie
```js
var x = document.cookie;
```
### 修改 Cookie
修改 cookie 类似于创建 cookie 旧的 cookie 将被覆盖。
```js
document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```
###  删除 Cookie
只需要设置 expires 参数为以前的时间即可，
当您删除时不必指定 cookie 的值

## Cookie相关的Http头
两个Http头部和Cookie有关：Set-Cookie和Cookie
+ Set-Cookie由服务器发送，它包含在响应请求的头部中。它用于在客户端创建一个Cookie
+ Cookie头由客户端发送，包含在HTTP请求的头部中。注意，只有cookie的domain和path与请求的URL匹配才会发送这个cookie
### Set-Cookie响应头的格式如下所示
```jsx
Set-Cookie: <name>=<value>[; <name>=<value>]...
                    [; expires=<date>][; domain=<domain_name>]
                    [; path=<some_path>][; secure][; httponly]
```
+ expires=<date>: 设置cookie的有效期，如果cookie超过date所表示的日期时，cookie将失效
>如果没有设置这个选项，那么cookie将在浏览器关闭时失效
+ domain=<domain_name> : 指定了可以访问该 Cookie 的 Web 站点或域
+ path=<some_path>:
+  secure   : 指定是否使用HTTPS安全协议发送Cookie
+ httponly : 用于防止客户端脚本通过document.cookie属性访问Cookie，有助于保护Cookie不被跨站脚本攻击窃取或篡改
    + 能有效的防止XSS攻击


## cookie的特点
1. 只能使用文本
2. 单条存储有大小限制 4KB
+ cookie 是有大小限制的，每个 cookie 所存放的数据不能超过4kb，如果 cookie 字符串的长度超过4kb，则该属性将返回空字符串
3. 数量限制(一般浏览器，限制大概在50条左右)
4. 读取有域名限制 不可跨域读取，只能由来自 写入cookie的 同一域名 的网页可进行读取。
5. 时效限制 每个cookie都有时效，最短的有效期是，会话级别：就是当浏览器关闭，那么cookie立即销毁。

## Cookie 的作用
就是用于解决 "如何记录客户端的用户信息":
+ 当用户访问 web 页面时，他的名字可以记录在 cookie 中。
+ 在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。
+ 密码用户名记录
+ 浏览记录的保存

创建cookie
指定cookie绑定路径
设置cookie有效期
响应中添加cookie
