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

### 微信扫码登录使用的是基于事件驱动的反向 ajax

- 反向 Ajax 本质上则是这样的一种概念：能够从服务器端向客户端发送数据
- 在一个标准的 HTTP Ajax 请求中，数据是发送给服务器端的，
- 反向 Ajax 可以某些特定的方式来模拟发出一个 Ajax 请求，这些方式本文都会论及，
- 这样的话，服务器就可以尽可能快地向客户端发送事件（低延迟通信）。
- 反向 Ajax 的目的是让服务器将信息推送到客户端

1. 每打开一次微信网页版页面的时候会随机生成一个含有唯一 uid 的二维码 目的是为了识别用户身份 而且实际上打开这个页面的时候浏览器已经和 Server 创建了一个长连接等待确认信息。
2. 查看 http://wx.qq.com 的源码可以看到，这个页面在加载完毕时，也已经把很多登录后才需要的相关资源都预先加载进来了，所以长连接等待登录用户得到确认后展示用户信息的速度很快，因为无需刷页面和加载头像外的其他资源。
3. 微信客户端针对 http://weixin.qq.com/x/ 开头的地址做了特殊处理，会自动获取相关信息并提示确认。 在手机版微信访问这个页面进行确认时，Server 已经同时获得了客户端信息，并通过之前保持的长连接告知浏览器。
4. 整个授权过程的验证部分在手机端进行，有效杜绝了 PC 上泛滥的各类木马、『安全工具』的监听，大大降低了帐号被盗的风险。
5. 浏览器获得一个临时 id，通过长连接等待客户端扫描带有此 id 的二维码后，从长连接中获得客户端上报给 server 的帐号信息进行展示。 并在客户端点击确认后，获得服务器授信的令牌，进行随后的信息交互过程。 在超时、网络断开、其他设备上登录后，此前获得的令牌或丢失、或失效，对授权过程形成有效的安全防护。

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

## websocket 断线重连实践解决方案

websocket 断线频率较高 解决方案两种，一种是修改 nginx 配置信息，第二种是 websocket 发送心跳包。

断线的可能原因 1：websocket 超时没有消息自动断开连接，应对措施：
这时候我们就需要知道服务端设置的超时时间是多少，在小于超时时间内发送心跳包，有 2 中方案，
一种是客户端主动发送上行心跳包，另一种方案是服务端主动发送下行心跳包。
下面主要讲一下客户端也就是前端如何实现心跳包：
跳包之所以叫心跳包是因为：它像心跳一样每隔固定时间发一次，以此来告诉服务器，这个客户端还活着。
心跳检测步骤：

1. 客户端每隔一个时间间隔发生一个探测包给服务器
2. 客户端发包时启动一个超时定时器
3. 服务器端接收到检测包，应该回应一个包
4. 如果客户机收到服务器的应答包，则说明服务器正常，删除超时定时器
5. 如果客户端的超时定时器超时，依然没有收到应答包，则说明服务器挂了

```js
//心跳检测
var heartCheck = {
  timeout: 30000, //30秒发一次心跳
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function () {
    clearTimeout(this.timeoutObj);
    clearTimeout(this.serverTimeoutObj);
    return this;
  },
  start: function () {
    var self = this;
    this.timeoutObj = setTimeout(function () {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      ws.send('ping');
      console.log('ping!');
      self.serverTimeoutObj = setTimeout(function () {
        //如果超过一定时间还没重置，说明后端主动断开了
        ws.close(); //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, self.timeout);
    }, this.timeout);
  },
};
```

断线的可能原因 2：websocket 异常包括服务端出现中断，交互切屏等等客户端异常中断等等

http://www.webzsky.com/?p=1244

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
