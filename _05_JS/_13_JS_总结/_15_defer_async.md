CSS 不会阻塞 DOM 的解析

浏览器是解析 DOM 生成 DOM Tree，
结合 CSS 生成的 CSS Tree，
最终组成 render tree，再渲染页面。
由此可见，在此过程中 CSS 完全无法影响 DOM Tree，因而无需阻塞 DOM 解析。

CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。
JS 阻塞 DOM 解析，但浏览器会"偷看"DOM，预先下载相关资源。
浏览器遇到 <script>且没有 defer 或 async 属性的 标签时，会触发页面渲染，因而如果前面 CSS 资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。

- 没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
- 有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。
- 有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

- defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
- 它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
- defer 它是按照加载顺序执行脚本的 async 则是一个乱序执行的主

- async：异步，外部 JS 加载完成后，浏览器空闲时，Load 事件触发前执行，乱序；
- defer：异步，在 JS 加载完成后，整个文档解析完成后，触发 DOMContentLoaded 事件前执行，顺序；
