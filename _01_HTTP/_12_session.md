https://blog.csdn.net/qq_42098849/article/details/104632898

https://blog.csdn.net/lizhengxv/article/details/81541977
+ 存放位置： session 在服务器端，cookie 在客户端（浏览器）
+ 存取方式： Cookie中保存的是字符串，Session保存的是对象
+ session 默认被存在在服务器的一个文件里（不是内存）
+ session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）
+ session 可以放在 文件、数据库、或内存中都可以
+ 用户验证这种场合一般会用 session

Session 对象用来存储特定用户会话所需的信息。 Session由服务端生成，保存在服务器的内存、缓存、硬盘或数据库中。

典型的应用有：
+ 判断用户是否登录。
+ 购物车功能。

# 三者区别
## 生命周期：
+ cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效
+ localStorage：除非被手动清除，否则将会永久保存。
+ sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。
## 存放数据大小：
+ cookie：4KB左右
+ localStorage和sessionStorage：可以保存5MB的信息。
## HTTP请求：
+ cookie：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
+ localStorage和sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信
## 易用性：
+ cookie：需要程序员自己封装，源生的Cookie接口不友好
+ localStorage和sessionStorage：源生接口可以接受，亦可再次封装来对Object和Array有更好的支持