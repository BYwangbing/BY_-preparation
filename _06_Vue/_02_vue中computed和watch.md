**Vue的组件对象支持计算属性computed和侦听属性watch两个选项**

## methods、computed、watch三者的区别
+ methods是个方法，执行的时候需要事件进行触发
+ computed是一个计算属性，是实时响应的，只要data中的属性发生了变化那么就会触发computed，计算属 性是基于属性的依赖进行缓存的，methods调用的时候需要加()，而computed调用的时候是不需要加()
+ watch属性监听，watch用来监听属性的变化，当值发生变化的时候来执行特定的函数，watch监听属性的时候 会有2个参数newVal和oldVal一个新值一个旧值

>链接：https://juejin.im/post/6850037277675454478
## computed和watch的区别
### 计算属性computed：
+ 支持缓存，只有依赖数据发生改变，才会重新进行计算
+ 不支持异步，当computed内有异步操作时无效，无法监听数据的变化
+ computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值
+ 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
+ 如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法
#### getter
#### setter

### 侦听属性watch：

+ 不支持缓存，数据变，直接会触发相应的操作；
+ watch支持异步；
+ 监听的函数接收两个参数:
    + 第一个参数是最新的值；
    + 第二个参数是输入之前的值；
    + 当一个属性发生变化时，需要执行对应的操作；
    + 一对多；
+ 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作
    + 函数有两个参数：
        + immediate：组件加载立即触发回调函数执行
        + deep: deep的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修改obj里面任何一个属性都会触发这个监听器里的 handler

## computed和watch定义
+  **computed**是计算属性，类似于过滤器,对绑定到视图的数据进行处理,并监听变化进而执行对应的方法，

```vue
<template>
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
</template>
<script>
let vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
});
</script>
```
计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。<br />
值得注意的是“reversedMessage”不能在组件的props和data中定义，否则会报错。

+ watch是一个侦听的动作，用来观察和响应 Vue 实例上的数据变动
### computed和watch用法异同

+ 相同： computed和watch都起到监听/依赖一个数据，并进行处理的作用
+ 异同：它们其实都是vue对监听器的实现，只不过**computed主要用于对同步数据的处理，watch则主要用于观测某个值的变化去完成一段开销较大的复杂业务逻辑**。能用computed的时候优先用computed，避免了多个数据影响其中某个数据时多次调用watch的尴尬情况。

### watch的高级用法
1. handler方法和immediate属性
2. deep属性
+ watch里还有一个deep属性，代表是否开启深度监听，默认为false
+ deep属性的意思是深度遍历，会在对象一层层往下遍历，在每一层都加上监听器
### computed的本质 —— computed watch
### watch底层是如何工作的
new Vue()的时候调用了_init方法完成了初始化
### 总结
+ 计算属性本质上是一个computed watch，侦听属性本质上是一个user watch。
+ 且它们其实都是vue对监听器的实现，只不过computed主要用于对同步数据的处理，watch则主要用于观测某个值的变化去完成一段开销较大的复杂业务逻辑。
+ 能用computed的时候优先用computed，避免了多个数据影响其中某个数据时多次调用watch的尴尬情况。。

