# 一、render Watcher 渲染订阅者的收集

# 二、user Watcher 用户自定义订阅者的收集

# 三、computed Watcher 计算属性订阅者的收集

计算属性订阅者的收集和其它订阅者收集的流程不一样，另外计算属性还实现了缓存功能。
计算属性 computed 是在 Vue 实例初始化中的 initState 函数中，执行了 if (opts.computed) initComputed(vm, opts.computed) 来初始化的，来看一下 initComputed 函数。
