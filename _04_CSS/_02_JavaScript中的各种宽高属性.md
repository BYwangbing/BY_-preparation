## window 和 document

- Window 对象表示浏览器中打开的窗口；window 对象可以省略。比如 alert()、window.alert()。

- Document 对象是 Window 对象的一部分。那么 document.body 我们可以写成 window.document.body；浏览器的 HTML 文档成为 Document 对象。

## 与 window 相关的宽高

- window.innerWidth，通过字面意思我们知道这是一个内部的宽度
- window.innerHeight，内部的高度
- window.outWidth，外部的宽度
- window.outHeight，外部的高度

### 挂靠在 window 下的宽高还有 window.screen， window.screen 包含有关用户屏幕的信息

- window.screen.width
- window.screen.height
- window.screen.availHeight
- window.screen.availWidth
- window.screenTop
- window.screenLeft

## docment 下有三类属性：

- 与 client 相关的宽高
- 与 offset 相关的宽高
- 与 scroll 相关的宽高

### 与 client 相关的宽高

- document.body.clientWidth
- document.body.clientHeight
- document.body.clientLeft
- document.body.clientTop

clientWidth 和 clientHeight：该属性指的是元素的可视部分宽度和高度，即 padding+contenr。
如果没有滚动条，即为元素设定的高度和宽度。
如果出现滚动条，滚动条会遮盖元素的宽高，那么该属性就是其本来宽高减去滚动条的宽高。
