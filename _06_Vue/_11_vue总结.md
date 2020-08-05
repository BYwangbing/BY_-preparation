# vue框架篇
>链接：https://juejin.im/post/6850037277675454478
## vue的优点
+ 轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；
+ 简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；
+ 双向数据绑定：保留了angular的特点，在数据操作方面更为简单；
+ 组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；
+ 视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；
+ 虚拟DOM：dom操作是非常耗费性能的，不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；
+ 运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势。

## 请详细说下你对vue生命周期的理解？
总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

## 如何获取dom?
    答： ref="domName" 用法：this.$refs.domName
 
# vue插件篇

## 状态管理（vuex）
## 路由页面管理（vue-router）
## 网络请求(axios)
## vue常用ui库
+ 移动端
    + mint-ui （http://mint-ui.github.io/#!/zh-cn）
    + Vant（https://youzan.github.io/vant/#/zh-CN/home）
    + VUX (https://vux.li/)
+ pc端
    + element-ui（https://element.eleme.cn/2.13/#/zh-CN/component/installation）
    + Ant Design of Vue（https://www.antdv.com/docs/vue/introduce-cn/）
    + Avue (https://avuejs.com/)
