WebSocket 出现前
+ 以前的推送技术使用 Ajax 轮询，浏览器需要不断地向服务器发送http请求来获取最新的数据，浪费很多的带宽等资源。
+ 使用webSocket通讯，客户端和服务端只需要一次握手建立连接，就可以互相发送消息，进行数据传输，更实时地进行通讯。
## 推送技术
![Image text](img/推送技术.png)
### 传统轮询(Traditional Polling)
当前Web应用中较常见的一种持续通信方式，通常采取 setInterval 或者 setTimeout 实现。
+ setInterval：在网络情况不稳定的情况下，服务器从接收请求、发送请求到客户端接收请求的总时间有可能超过10秒，而请求是以10秒间隔发送的，这样会导致接收的数据到达先后顺序与发送顺序不一致
+ setTimeout： 程序首先设置10秒后发起请求，当数据返回后再隔10秒发起第二次请求，以此类推。这样的话虽然无法保证两次请求之间的时间间隔为固定值，但是可以保证到达数据的顺序。
### 长轮询(Long Polling)
+ 长轮询的基本思想是在每次客户端发出请求后，服务器检查上次返回的数据与此次请求时的数据之间是否有更新，
+ 如果有更新则返回新数据并结束此次连接，否则服务器 hold 住此次连接，直到有新数据时再返回相应。
+ 而这种长时间的保持连接可以通过设置一个较大的 HTTP timeout` 实现。
+ 有效地解决传统轮询带来的带宽浪费 服务器hold连接会消耗资源，返回数据顺序无保证，难于管理维护

### 服务器发送事件(Server-Sent Event)


### 一次握手建立WebSocket连接
+ 浏览器先向服务器发送个url以ws://开头的http的GET请求，响应状态码101表示Switching Protocols切换协议
+ 服务器根据请求头中Upgrade:websocket把客户端的请求切换到对应的协议，即websocket协议。
+ 响应头消息中包含Upgrade:websocket，表示它切换到的协议，即websocket协议。

WebSocket 协议是借用 HTTP协议 的 101 switch protocol 来达到协议转换的，从HTTP协议切换成WebSocket通信协议。
## WebSocket

应用程序与传输层之间的编程接口被称为`sockets(套接口)`

WebSocket 是一种基于TCP的 全双工通信协议 实现了浏览器与服务器全双工通信

HTTP 协议有一个缺陷：通信只能由客户端发起

最大特点：
+ 服务器可以主动向客户端推送信息，
+ 客户端也可以主动向服务器发送信息，
+ 是真正的双向平等对话，属于服务器推送技术的一种。

其他特点：
+ 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
+ 没有同源限制，客户端可以与任意服务器通信
+ 建立在 TCP 协议之上，服务器端的实现比较容易
+ 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
+ 数据格式比较轻量，性能开销小，通信高效
+ 可以发送文本，也可以发送二进制数据

## 客户端的 API
1.**`WebSocket 构造函数`** 
> WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例
```js
let ws = new WebSocket('ws://localhost:8080');
```
2. **`webSocket.readyState`**
> readyState属性返回实例对象的当前状态，共有四种：
+ CONNECTING：值为0，表示正在连接。
+ OPEN：值为1，表示连接成功，可以通信了。
+ CLOSING：值为2，表示连接正在关闭。
+ CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
3. **`webSocket.onopen`**
> 实例对象的**`onopen`**属性，用于指定连接成功后的回调函数
```js
ws.onopen = function () {
  ws.send('Hello Server!');
}
```
> 如果要指定多个回调函数，可以使用**`addEventListener`**方法
```js
ws.addEventListener('open', function (event) {
  ws.send('Hello Server!');
});
```
4. webSocket.onclose
> 实例对象的onclose属性，用于指定连接关闭后的回调函数
```js
ws.onclose = function(event) {
  const code = event.code;
  const reason = event.reason;
  const wasClean = event.wasClean;
  // handle close event
};

ws.addEventListener("close", function(event) {
  const code = event.code;
  const reason = event.reason;
  const wasClean = event.wasClean;
  // handle close event
});
```
5. webSocket.onmessage
>实例对象的onmessage属性，用于指定收到服务器数据后的回调函数
```js
ws.onmessage = function(event) {
  const data = event.data;
  // 处理数据
};

ws.addEventListener("message", function(event) {
  const data = event.data;
  // 处理数据
});
```
6. webSocket.send()
>实例对象的send()方法用于向服务器发送数据。
