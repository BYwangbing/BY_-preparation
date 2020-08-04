## Vuex
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
## 简述vuex的数据传递流程
## vuex中的数据在页面刷新后数据消失
用sessionstorage 或者 localstorage 存储数据
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