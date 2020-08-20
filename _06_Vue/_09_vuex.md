## Vuex
在Vue项目开发时使用的状态管理工具, 将应用中的所有状态都放在一起，集中式来管理
+ 公共状态管理
+ 遵循单向数据流
+ 数据是响应式的 

### vuex是什么
Vuex 是一个专为 Vue.js应用程序开发的状态管理模式。
它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

### 怎么使用vuex
第一步安装`npm install vuex -S`
第二步创建store
```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//不是在生产环境debug为true
const debug = process.env.NODE_ENV !== 'production';
//创建Vuex实例对象
const store = new Vuex.Store({
    strict:debug,//在不是生产环境下都开启严格模式
    state:{},
    getters:{},
    mutations:{},
    actions:{}
});
export default store;
```
第三步注入vuex
```js
import Vue from 'vue';
import App from './App.vue';
import store from './store';
const vm = new Vue({
    store:store,
    render: h => h(App)
}).$mount('#app')
```
##vuex有几个核心属性
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 <br />
有 5 种，分别是 state、getter、mutation、action、module
+ **state** 唯一数据源,Vue 实例中的 data 遵循相同的规则
+ **getters** 可以认为是 store 的计算属性,就像计算属性一样
    + getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    + Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值.
+ **mutation** 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation,非常类似于事件,通过store.commit 方法触发
+ **action** 类似于 mutation，不同在于Action 提交的是 mutation，而不是直接变更状态，Action 可以包含任意异步操作
+ **module** 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。
    + 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
    + 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。

+ state 存放状态
+ mutations state成员操作
+ getters 加工state成员给外界
+ actions 异步操作
+ modules 模块化状态管理

Vuex提供了mapState、MapGetters、MapActions、mapMutations等辅助函数给开发在vm中处理store。

>https://segmentfault.com/a/1190000021860805?utm_source=tag-newest
## 为什么我们在组件中直接this.$store.xx,就可以对vuex进行操作
每次我们在使用vuex的时候需要
```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
```
Vue.use会执行Vuex对象中的 `install`方法
```js
function install (_Vue) {
    // 防止重复调用install
    if (Vue && _Vue === Vue) {
        console.error('[vuex] already installed.Vue.use(Vuex) should be called only once.');
        return
    }
    Vue = _Vue;
    applyMixin(Vue);
}
```
在install方法中调用了 `applyMixin` 方法

在 `applyMixin` 方法中，先获取Vue的版本号, 对于vue2.x版本，使用 全局混入 的机制，使用全局混入，它将影响每一个之后创建的 Vue 实例。在实例生命周期`beforeCreate`的会执行 `vuexInit`方法。
```js
/**
* Vuex初始化钩子，注入到每个实例的钩子列表中
* Vuex init hook, injected into each instances init hooks list.
*/
function vuexInit () {
    // 这里的this指向Vue实例
    var options = this.$options;
    // store injection
    if (options.store) {
        this.$store = typeof options.store === 'function'? options.store(): options.store;
    } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
    }
}
//===============
new Vue({
    router,
    store,    // 在/store/index.js文件中暴露出的：new Vuex.Store出来的对象
    render: h => h(App),
    }).$mount('#app');
```
+ 当我们执行new Vue的时候，其中的参数会被合并到 $options中。此时存在options.store，就将实例的 $store, 指向Store实例对象。
+ 而在子组件中， `$store`属性也会指向父组件的 `$store`属性。
+ 即在每个实例中 `this.$store`都会指向我们在`/store/index.js`中`new Vuex.Store`实例化出来的对象。

## 简述vuex的数据传递流程
1. 通过new Vuex.Store()创建一个仓库 state是公共的状态，state--->components渲染页面
2. 在组件内部通过this.$store.state.属性 来调用公共状态中的state，进行页面的渲染。
3. 当组件需要修改数据的时候，必须遵循单向数据流。通过this.$store.dispatch来触发actions中的方法
4. actions中的每个方法都会接受一个对象 这个对象里面有一个commit方法，用来触发mutations里面的方法
5. mutations里面的方法用来修改state中的数据 mutations里面的方法都会接收到2个参数 一个是store中的state另外一个是需要传递到参数
6. 当mutations中的方法执行完毕后state会发生改变，因为vuex的数据是响应式的 所以组件的状态也会发生改变
## Vuex的设计思想
Vuex的设计思想，借鉴了Flux、Redux，将数据存放到全局的store，再将store挂载到每个vue实例组件中，利用Vue.js的细粒度数据响应机制来进行高效的状态更新。

## Vuex的原理解析
### 疑问1：vuex的store是如何挂载注入到组件中呢？
>https://www.segmentfault.com/a/1190000021860805?utm_source=tag-newest

## 为什么要用vuex？
最近尝试用vue做项目，使用了vuex管理状态，但是发现一个问题：

就是页面刷新后vuex里面的数据就清空掉了，所以基本上我在vuex里面存的数据都要在浏览器里面存一次，那么问题来了，请问为什么不直接就把数据存到浏览器里面呢，还要存到vuex里面多此一举？

答： 
+ vuex 是 vue 的状态管理器，存储的数据是响应式的
+ 与数据存储不同，Vuex 解决的主要问题是不同组件间的通信，以达到对当前页面数据状态的管理。
+ 既然是状态，它不会是持久化的，在页面刷新或关闭后，数据自动丢失。
+ 如果组件比较少，完全可以不用 Vuex。
+ 而且，目前有很多基于 Vuex 的插件，结合 localStorage、sessionStorage、IndexDB 等，可以达到数据持久化的目的。

## vuex中的数据在页面刷新后数据消失
用sessionStorage 或者 localstorage 存储数据
```html
存储： sessionStorage.setItem( '名', JSON.stringify(值) )
使用： sessionStorage.getItem('名') ---得到的值为字符串类型，用JSON.parse()去引号；
```
也可以引入插件vuex-persist，使用方法如下：
安装
`npm install --save vuex-persist`
引入
`import VuexPersistence from 'vuex-persist'`
先创建一个对象并进行配置
```js
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
```
引入进vuex插件
```js
const store = new Vuex.Store({
  state: { ... },
  mutations: { ... },
  actions: { ... },
  plugins: [vuexLocal.plugin]
}) 
```
## 怎么在组件中批量使用Vuex的getter属性
使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中
```js
import {mapGetters} from 'vuex'
export default{
    computed:{
        ...mapGetters(['total','discountTotal'])
    }
}
```
## mutation和action有什么区别
+ action 提交的是 mutation，而不是直接变更状态。
    + mutation可以直接变更状态action 可以包含任意异步操作。
    + mutation只能是同步操作
+ 提交方式不同
    + **action 是用this.store.dispatch('ACTION_NAME',data)来提交**
    + **mutation是用this.$store.commit('SET_NUMBER',10)来提交**
    
+ 接收参数不同
    + mutation第一个参数是state，
    + 而action第一个参数是context，其包含了
```js
{
    state,      // 等同于 `store.state`，若在模块中则为局部状态
    rootState,  // 等同于 `store.state`，只存在于模块中
    commit,     // 等同于 `store.commit`
    dispatch,   // 等同于 `store.dispatch`
    getters,    // 等同于 `store.getters`
    rootGetters // 等同于 `store.getters`，只存在于模块中
}
```
## 在v-model上怎么用Vuex中state的值？
需要通过computed计算属性来转换
```vue
<input v-model="message">
// ...
computed: {
    message: {
        get () {
            return this.$store.state.message
        },
        set (value) {
            this.$store.commit('updateMessage', value)
        }
    }
}
```
