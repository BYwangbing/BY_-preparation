> https://segmentfault.com/a/1190000008829958?utm_source=sf-related
## 内容优化
+ (1)减少HTTP请求数:这条策略是最重要最有效的
    + 因为一个完整的请求要经过DNS寻址，与服务器建立连接，发送数据，等待服务器响应，接收数据这样一个消耗时间成本和资源成本的复杂的过程。
    + 常见方法：
        + 合并多个CSS文件和js文件，
        + 利用CSS Sprites整合图像，
        + Inline Images(使用 data：URL scheme在实际的页面嵌入图像数据 )，
        + 合理设置HTTP缓存等。
+ (2)减少DNS查找
+ (3)避免重定向
+ (4)使用Ajax缓存
+ (5)延迟加载组件,预加载组件
+ (6)减少DOM元素数量:页面中存在大量DOM元素,会导致javascript遍历DOM的效率变慢。
+ (7)最小化iframe的数量：iframe 提供了一个简单的方式把一个网站的内容嵌入到另一个网站中。但其创建速度比其他包括JavaScript和CSS的DOM元素的创建慢了1-2个数量级。
+ (8)避免404：HTTP请求时间消耗是很大的，因此使用HTTP请求来获得一个没有用处的响应（例如404没有找到页面）是完全没有必要的，它只会降低用户体验而不会有一点好处。
## 服务器优化
+ (1)使用内容分发网络（CDN）：把网站内容分散到多个、处于不同地域位置的服务器上可以加快下载速度。
+ (2)GZIP压缩
+ (3)设置ETag：ETags（Entity tags，实体标签）是web服务器和浏览器用于判断浏览器缓存中的内容和服务器中的原始内容是否匹配的一种机制。
+ (4)提前刷新缓冲区
+ (5)对Ajax请求使用GET方法
+ (6)避免空的图像src
## Cookie优化
+ (1)减小Cookie大小
+ (2)针对Web组件使用域名无关的Cookie
## CSS优化
+ (1)将CSS代码放在HTML页面的顶部
+ (2)避免使用CSS表达式
+ (3)使用`<link>`来代替@import
+ (4)避免使用Filters
## javascript优化
+ (1)将JavaScript脚本放在页面的底部。
+ (2)将JavaScript和CSS作为外部文件来引用：在实际应用中使用外部文件可以提高页面速度，因为JavaScript和CSS文件都能在浏览器中产生缓存。
+ (3)缩小JavaScript和CSS
+ (4)删除重复的脚本
+ (5)最小化DOM的访问：使用JavaScript访问DOM元素比较慢。
+ (6)开发智能的事件处理程序
+ (7)javascript代码注意：谨慎使用with,避免使用eval Function函数,减少作用域链查找。
## 图像优化
+ (1)优化图片大小
+ (2)通过CSS Sprites优化图片
+ (3)不要在HTML中使用缩放图片
+ (4)favicon.ico要小而且可缓存
