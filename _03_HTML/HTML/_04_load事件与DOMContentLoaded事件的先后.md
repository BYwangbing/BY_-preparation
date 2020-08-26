浏览器器内核拿到内容后，渲染大概可以划分成以下几个步骤：

1. 解析html建立dom树
2. 解析css构建render树（将CSS代码解析成树形的数据结构，然后结合DOM合并成render树）
3. 布局render树（Layout/reflow），负责各元素尺寸、位置的计算
4. 绘制render树（paint），绘制页面像素信息
5. 浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上。

load事件与DOMContentLoaded事件的先后
+ 当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片。(譬如如果有async加载的脚本就不一定完成)
+ 当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片都已经加载完成了。（渲染完毕了）
+ 顺序是：DOMContentLoaded -> load

css加载是否会阻塞dom树渲染？(头部引入css的情况)
+  css是由单独的下载线程异步下载的
+ css加载不会阻塞DOM树解析（异步加载时DOM照常构建）
+ 但会阻塞render树渲染（渲染时需等css加载完毕，因为render树需要css信息）

因为你加载css的时候，可能会修改下面DOM节点的样式，
如果css加载不阻塞render树渲染的话，那么当css加载完之后，render树可能又得重新重绘或者回流了，这就造成了一些没有必要的损耗。
所以干脆就先把DOM树的结构先解析完，把可以做的工作做完，然后等你css加载完之后，在根据最终的样式来渲染render树，这种做法性能方面确实会比较好一点。

普通图层和复合图层
