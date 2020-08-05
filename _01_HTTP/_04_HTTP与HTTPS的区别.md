https://blog.csdn.net/qq_42364543/article/details/107793441

+ HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的SSL/TLS加密传输协议
+ HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443
+ HTTP的连接很简单，是无状态的；HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全。
+ HTTPS协议需要到CA申请证书，一般免费证书较少，因而需要一定费用

## HTTPS特点
基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护
+ 内容加密：采用混合加密技术，中间者无法直接查看明文内容
+ 验证身份：通过证书认证客户端访问的是自己的服务器
+ 保护数据完整性：防止传输的内容被中间人冒充或者篡改

## HTTPS协议的缺点
+ https握手阶段比较费时，会使页面加载时间延长50%，增加10%~20%的耗电。
+ https缓存不如http高效，会增加数据开销。
+ SSL证书也需要钱，功能越强大的证书费用越高。
+ SSL证书需要绑定IP

## HTTP教程：
https://www.runoob.com/http/http-tutorial.html
+ HTTP 简介
+ HTTP 消息结构
+ HTTP 方法
+ HTTP 头信息
+ HTTP 状态码