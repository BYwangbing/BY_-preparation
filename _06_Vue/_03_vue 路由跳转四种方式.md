## router-link
**注意**：
+ router-link中链接如果是'/'开始就是从根路由开始
+ 如果开始不带'/'，则从当前路由开始
1. 不带参数
```vue
<router-link :to="{name:'home'}"> </router-link>
<router-link :to="{path:'/home'}"></router-link>
<!--name,path都行, 建议用name--> 
```
2. 带参数
```vue
<router-link :to="{name:'home', params: {id:1}}"></router-link> 
params传参数 (类似post)
路由配置 path: "/home/:id" 或者 path: "/home:id" 
不配置path ,第一次可请求,刷新页面id会消失
配置path,刷新页面id会保留
html 取参 $route.params.id
script 取参 this.$route.params.id
<router-link :to="{name:'home', query: {id:1}}"> </router-link>
query传参数 (类似get,url后面会显示参数)
路由可不配置
html 取参 $route.query.id
script 取参 this.$route.query.id
```
## this.$router.push() (函数里面调用) 编程式路由
1. 不带参数
```js
this.$router.push('/home');
this.$router.push({name:'home'});
this.$router.push({path:'/home'});
```
2. query传参 
```js
this.$router.push({name:'home',query: {id:'1'}});
this.$router.push({path:'/home',query: {id:'1'}});
// html 取参 $route.query.id
// script 取参 this.$route.query.id
```
3. params传参
```js
this.$router.push({name:'home',params: {id:'1'}}) // 只能用 name
```
    + 路由配置 path: "/home/:id" 或者 path: "/home:id" ,
    + 不配置path ,第一次可请求,刷新页面id会消失
    + 配置path,刷新页面id会保留
    + html 取参 $route.params.id
    + script 取参 this.$route.params.id
4. query和params区别
+ query类似 get, 跳转之后页面 url后面会拼接参数,类似?id=1, 非重要性的可以这样传, 密码之类还是用params刷新页面id还在
+ params类似 post, 跳转之后页面 url后面不会拼接参数 , 但是刷新页面id 会消失
```js
// 字符串
router.push('home');

// 对象
router.push({ path: 'home' });

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }});

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})

```


## this.$router.replace() (用法同上,push)
## this.$router.go(n) 
**向前或者向后跳转n个页面，n可为正整数或负整数**
## 区别
+ `this.$router.push`: 跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面
+ `this.$router.replace`: 跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接替换了当前页面)
+ `this.$router.go(n)`: 向前或者向后跳转n个页面，n可为正整数或负整数