WebSocket 出现前

- 以前的推送技术使用 Ajax 轮询，浏览器需要不断地向服务器发送 http 请求来获取最新的数据，浪费很多的带宽等资源。
- 使用 webSocket 通讯，客户端和服务端只需要一次握手建立连接，就可以互相发送消息，进行数据传输，更实时地进行通讯。

## 推送技术

![Image text](img/推送技术.png)

### 传统轮询(Traditional Polling)

当前 Web 应用中较常见的一种持续通信方式，通常采取 setInterval 或者 setTimeout 实现。

- setInterval：在网络情况不稳定的情况下，服务器从接收请求、发送请求到客户端接收请求的总时间有可能超过 10 秒，而请求是以 10 秒间隔发送的，这样会导致接收的数据到达先后顺序与发送顺序不一致
- setTimeout： 程序首先设置 10 秒后发起请求，当数据返回后再隔 10 秒发起第二次请求，以此类推。这样的话虽然无法保证两次请求之间的时间间隔为固定值，但是可以保证到达数据的顺序。

### 长轮询(Long Polling)

- 长轮询的基本思想是在每次客户端发出请求后，服务器检查上次返回的数据与此次请求时的数据之间是否有更新，
- 如果有更新则返回新数据并结束此次连接，否则服务器 hold 住此次连接，直到有新数据时再返回相应。
- 而这种长时间的保持连接可以通过设置一个较大的 HTTP timeout` 实现。
- 有效地解决传统轮询带来的带宽浪费 服务器 hold 连接会消耗资源，返回数据顺序无保证，难于管理维护

### 服务器发送事件(Server-Sent Event)

### WebSocket 与 Socket 的区别

- WebSocket 拥有完整的应用层协议，包含一套标准的 API
- Socket 是一组接口，是应用层与 TCP/IP 协议通信的中间软件抽象层，

### HTTP 与 WebSocket 区别

- http 是短连接，请求之后会关闭连接。
- WebSocket 长连接，只需通过一次请求初始化连接，然后所有的请求和响应都是通过这个 TCP 连接进行通信。

### 一次握手建立 WebSocket 连接

- 浏览器先向服务器发送个 url 以 ws://开头的 http 的 GET 请求，响应状态码 101 表示 Switching Protocols 切换协议
- 服务器根据请求头中 Upgrade:websocket 把客户端的请求切换到对应的协议，即 websocket 协议。
- 响应头消息中包含 Upgrade:websocket，表示它切换到的协议，即 websocket 协议。

WebSocket 协议是借用 HTTP 协议 的 101 switch protocol 来达到协议转换的，从 HTTP 协议切换成 WebSocket 通信协议。

## WebSocket

Upgrade: websocket
Connection: Upgrade
这就是 websocket 的核心，告诉服务器这是 websocket 请求，而不是 http 请求

- Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
- Sec-WebSocket-Protocol: chat, superchat
- Sec-WebSocket-Version: 13

* Sec-WebSocket-Key 是一个 Base64 encod 的值，是一个随机生成的，用于验证是否是真正的 websocket
* 然后 Sec-WebSocket-Protocol 是一个用户定义的字符串，用来区分同 URL 下，不同的服务需要不同的协议
* Sec-WebSocket-Version 这个不用说就是 websocket 的版本号。
  服务端返回：
* Sec-WebSocket-Accept 表示经过服务器确认，并且对客户端的 Sec-WebSocket-Key 进行了加密。
* Sec-WebSocket-Protocol 表示最终使用的协议。

应用程序与传输层之间的编程接口被称为`sockets(套接口)`

WebSocket 是一种基于 TCP 的 全双工通信协议 实现了浏览器与服务器全双工通信

HTTP 协议有一个缺陷：通信只能由客户端发起

最大特点：

- 服务器可以主动向客户端推送信息，
- 客户端也可以主动向服务器发送信息，
- 是真正的双向平等对话，属于服务器推送技术的一种。

其他特点：

- 协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL。
- 没有同源限制，客户端可以与任意服务器通信
- 建立在 TCP 协议之上，服务器端的实现比较容易
- 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
- 数据格式比较轻量，性能开销小，通信高效
- 可以发送文本，也可以发送二进制数据

1. WebSocket API 是下一代客户端-服务器的异步通信方法。
2. 该通信取代了单个的 TCP 套接字，使用 ws 或 wss 协议，可用于任意的客户端和服务器程序。
3. WebSocket API 最伟大之处在于服务器和客户端可以在给定的时间范围内的任意时刻，相互推送信息。
4. WebSocket 并不限于以 Ajax(或 XHR)方式通信，因为 Ajax 技术需要客户端发起请求，
5. 而 WebSocket 服务器和客户端可以彼此相互推送信息；XHR 受到域的限制，而 WebSocket 允许跨域通信。

## 客户端的 API

1.**`WebSocket 构造函数`**

> WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例

```js
let ws = new WebSocket('ws://localhost:8080');
```

2. **`webSocket.readyState`**
   > readyState 属性返回实例对象的当前状态，共有四种：

- CONNECTING：值为 0，表示正在连接。
- OPEN：值为 1，表示连接成功，可以通信了。
- CLOSING：值为 2，表示连接正在关闭。
- CLOSED：值为 3，表示连接已经关闭，或者打开连接失败。

3. **`webSocket.onopen`**
   > 实例对象的**`onopen`**属性，用于指定连接成功后的回调函数

```js
ws.onopen = function () {
  ws.send('Hello Server!');
};
```

> 如果要指定多个回调函数，可以使用**`addEventListener`**方法

```js
ws.addEventListener('open', function (event) {
  ws.send('Hello Server!');
});
```

4. webSocket.onclose
   > 实例对象的 onclose 属性，用于指定连接关闭后的回调函数

```js
ws.onclose = function (event) {
  const code = event.code;
  const reason = event.reason;
  const wasClean = event.wasClean;
  // handle close event
};

ws.addEventListener('close', function (event) {
  const code = event.code;
  const reason = event.reason;
  const wasClean = event.wasClean;
  // handle close event
});
```

5. webSocket.onmessage
   > 实例对象的 onmessage 属性，用于指定收到服务器数据后的回调函数

```js
ws.onmessage = function (event) {
  const data = event.data;
  // 处理数据
};

ws.addEventListener('message', function (event) {
  const data = event.data;
  // 处理数据
});
```

6. webSocket.send()
   > 实例对象的 send()方法用于向服务器发送数据。
