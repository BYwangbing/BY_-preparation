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

### 客户端的 API
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
