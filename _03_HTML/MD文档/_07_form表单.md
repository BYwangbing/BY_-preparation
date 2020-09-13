表单用于向服务器传输数据
## 表单提交中的方式有几种
+ 方法一：利用form的onsubmit()函数
+ 方法二：利用input类型为submit组件的onclick()函数
+ 方法三：利用button组件的onclick()函数，手动提交

## form表单常用属性
+ action：url 地址，服务器接收表单数据的地址
+ method：提交服务器的http方法，一般为post和get
+ name： 规定表单的名称
+ enctype：表单数据提交时使用的编码类型，默认使用"application/x-www-form-urlencoded"
    + application/x-www-form-urlencoded
    + multipart/form-data
    + text/plain
> enctype为form表单数据的编码格式，Content-type为Http传输的数据的编码格式

## 浏览器提交表单时，会执行如下步骤
1. 识别出表单中表单元素的有效项，作为提交项
2. 构建一个表单数据集
3. 根据form表单中的enctype属性的值作为content-type对数据进行编码
4. 根据form表单中的action属性和method属性向指定的地址发送数据
## 提交方式
1. get:表单数据会被encodeURIComponent后以参数的形式:name1=value1&name2=value2 附带在url?后面，再发送给服务器，并在url中显示出来。
2. post：enctype 默认"application/x-www-form-urlencoded"对表单数据进行编码，数据以键值对在http请求体重发送给服务器；如果enctype 属性为"multipart/form-data"，则以消息的形式发送给服务器。


一：application/x-www-form-urlencoded 主要用于如下:
+ 1.1: 最常见的POST提交数据方式。
+ 1.2：原生form默认的提交方式(可以使用enctype指定提交数据类型)。
+ 1.3：jquery，zepto等默认post请求提交的方式。
+ 支持GET/POST等方法，所有数据变成键值对的形式 key1=value1&key2=value2的形式
+ 特殊字符需要转义成utf-8编号，如空格会变成 %20;

二：multipart/form-data
+ 使用表单上传文件时，必须指定表单的 enctype属性值为 multipart/form-data. 请求体被分割成多部分，每部分使用 --boundary分割；

三：application/json


## 表单提交方式
### 无刷新页面提交表单
表单可实现无刷新页面提交，无需页面跳转，如下，通过一个隐藏的iframe实现，form表单的target设置为iframe的name名称

form提交目标位当前页面iframe则不会刷新页面
### 通过type=submit提交
一般表单提交通过type=submit实现，input type=“submit”,浏览器显示为button按钮，通过点击这个按钮提交表单数据跳转
### js提交form表单
js事件触发表单提交，通过button、链接等触发事件，js调用submit()方法提交表单数据，jquery通过submit()方法
+ js: document.getElementById("form").submit();
+ jquery: $("#form").submit();
### ajax异步提交表单数据(重点
采用ajax异步方式，通过js获取form中所有input、select等组件的值，将这些值组成Json格式，通过异步的方式与服务器端进行交互，

一般将表单数据传送给服务器端，服务器端处理数据并返回结果信息等
### 页面无跳转

### form表单上传文件
使用form表单进行上传文件需要为form添加enctype=“multipart/form-data” 属性，除此之外还需要将表单的提交方法改成post