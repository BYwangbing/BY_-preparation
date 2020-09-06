> https://www.runoob.com/http/http-methods.html

GET一般用于获取/查询资源信息，而POST一般用于更新资源信息
+ DELETE： 请求服务器删除指定的页面
+ PATCH： 实体中包含一个表，表中说明与该URI所表示的原内容的区别。
+ TRACE： 请求服务器在响应中的实体主体部分返回所得到的内容。
+ CONNECT: HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
+ OPTIONS： 允许客户端查看服务器的性能
    + 用于url验证，验证接口服务是否正常；
    + 安全、幂等；
+ PUT： 从客户端向服务器传送的数据取代指定的文档的内容
    + 用于创建、更新资源
    + 非安全、幂等
+ HEAD： 只请求页面的首部
+ GET： 请求指定的页面信息，并返回实体主体
    + GET请求有长度限制
    + GET方法提交数据，可能会带来安全性的问题，数据被浏览器缓存
    + GET请求请提交的数据放置在HTTP请求协议头中
    + GET方法通过URL请求来传递用户的输入
    + GET方式的提交你需要用**Request.QueryString**来取得变量的值。
+ POST： 请求服务器接受所指定的文档作为对所标识的URI的新的从属实体
    + POST方式提交时，通过Request.Form来访问提交的内容
    + 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）
    + POST请求可能会导致新的资源的建立和/或已有资源的修改
>https://juejin.im/post/6844904000815366157

##  options预请求
+ 客户端用于查看服务器的性能
+ 从客户端向服务器传送的数据取代指定的文档的内容
+ JavaScript的XMLHttpRequest对象进行CORS跨域资源共享时，就是使用OPTIONS方法发送嗅探请求，以判断是否有对指定资源的访问权限
+ 跨域请求中，浏览器自发的发起的预请求,浏览器会查询到两次请求，第一次的请求参数是options，以检测试实际请求是否可以被浏览器接受
+ 对复杂请求，浏览器必须先使用options发起一个预检请求，从而获知服务器是否允许该跨域请求，服务器确认以后才能发起实际的HTTP请求，否则停止第二次正式请求。

+ 请求方法不是`get head post`
+ post 的`content-type`不是
   + ` application/x-www-form-urlencode`,
   + `multipart/form-data`,
   + `text/plain` [也就是把content-type设置成"application/json"]
+ 请求设置了自定义的header字段: 比如业务需求，传一个字段，方面后端获取，不需要每个接口都传

## options作用
+ 获取服务器支持的HTTP请求方法；也是黑客经常使用的方法。
+ 用来检查服务器的性能。例如：AJAX进行跨域请求时的预检，需要向另外一个域名的资源发送一个options请求头，用以判断实际发送的请求是否安全。
