### v-if和v-show的区别
     1.v-show是css切换，v-if是完整的销毁和重新创建
     2.v-if是惰性的，只有当条件为真时才会真正渲染标签；如果初始条件不为真，则v-if不会去渲染标签。v-show则无论初始条件是否成立，都会渲染标签，它仅仅做的只是简单的CSS切换。
     3.v-if在条件切换时，会对标签进行适当的创建和销毁，而v-show则仅在初始化时加载一次，因此v-if的开销相对来说会比v-show大。
### 绑定 class 的数组用法
### prop 验证，和默认值
我们在父组件给子组件传值的时候，可以指定该props的默认值及类型，当传递数据类型不正确的时候，vue会发出警告
```vue
props: {
    visible: {
        default: true,
        type: Boolean,
        required: true
    },
},
```
### v-for key的作用
### vue初始化页面闪动问题
    在css里加上[v-cloak] {
        display: none;
    }
    在根元素加上style="display: none;" :style="{display: 'block'}"
### vue中的过滤器如何使用
    Vue.filter()  Vue.filter('过滤器的名称', function(){})
    + 参数1：过滤器名称
    + 参数2：过滤器实现的方法  该方法中有2个参数  
        + 参数1为需要过滤的数据，
        + 参数2为过滤器传递的参数
### vue中组件创建的方式有哪些？
    全局组件和局部组件
    + 全局组件 Vue.component();参数1：组件名称  参数2：组件的配置项
        + 使用 Vue.extend 来创建全局的Vue组件
        + 使用 Vue.component('组件的名称', 创建出来的组件模板对象)
        + 组件的 template 属性指向的模板内容,必须有且只能有唯一的一个根元素
    + 局部组件 new Vue({    components:{} key值为组件名称  val值为组件的配置项 })

### vue组件中data为什么必须是一个函数？
答：在component中，data必须以函数的形式存在，不可以是对象。<br />
&emsp;&emsp;组件中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。<br />
&emsp;&emsp;而单纯的写成对象形式，就是所有的组件实例共用了一个data，这样改一个全都改了。

### v-on可以监听多个方法吗
```vue
<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur, }">
```
### assets和static的区别
+ 相同点：assets和static两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下
+ 不同点：
    + assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器。
    + static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是static中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于assets中打包后的文件提交较大点。在服务器中就会占据更大的空间。
+ 建议：将项目中template需要的css样式文件、图片、js文件等都可以放置在assets中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css等文件可以放置在static中，因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。

### delete和Vue.delete删除数组的区别
    delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变
    Vue.delete 直接删除了数组 改变了数组的键值。
### vue更新数组时触发视图更新的方法
    答： push()；pop()；shift()；unshift()；splice()； sort()；reverse()