## 图片与文字会有空隙 原理是什么
当img和文字位于同一行中时，img默认是按照文字的基线baseline对齐
原因：将图片识别为文字，默认是基线对齐的，所以会有3px左右的偏差。
如何解决：
使用vertical-align属性，其值取top、bottom、middle都行。只有baseline不行。也就是说让img和文字的顶线、中线、底线对齐都可以清除图片下面的空隙。 通常使用top和middle。
方法二：定义容器里的字体大小为0。`font-size： 0；`
设置img为： `display:block;` 但是不提倡

文字： 顶线top | 中线middle | 基线base | 底线bottom
