## 前者是按照帧数刷新 后者是按照事件刷新的

requestAnimationFrame 与 setInterval 都可以实现循环触发事件，但是 setInterval 是基于时间的，而 requestAnimationFrame 是基于帧数的

## requestAnimationFrame

HTML5 新增加的 API，类似于 setTimeout 定时器。window 对象的一个方法， window.requestAnimationFrame

1. 特点：

- 按帧对网页进行重绘 该方法告诉浏览器希望执行动画并请求浏览器在下一次重 绘前调用回调函数来更新动画
  - 显示器有固定的刷新频率（60Hz 或 75Hz） requestAnimationFrame 的基本思想让页面重绘的频率与 这个刷新频率保持同步
  - 比如显示器屏幕刷新率为 60Hz，使用 requestAnimationFrame API，那么 回调函数就每 1000ms / 60 ≈ 16.7ms 执行一次；
  - 如果显示器屏幕的刷新率 为 75Hz，那么回调函数就每 1000ms / 75 ≈ 13.3ms 执行一次。
  - 通过 requestAnimationFrame 调用回调函数引起的页面重绘或回流的时间间隔和显示器的刷新时间间隔相同。
  - 所以 requestAnimationFrame 不需要像 setTimeout 那样传递时间间隔，而是浏览器通过系统获取并使用显示器刷新频率
- 由系统来决定回调函数的执行时机，在运行时浏览器会自动优化方法的调用

2. 优势：
   从实现的功能和使用方法上，requestAnimationFrame 与定时器 setTimeout 都相似，所以说其优势是同 setTimeout 实现的动画相比。

- 提升性能，防止掉帧
  - setTimeout 通过设置一个间隔时间不断改变图像，达到动画效果。该方法在一些低端机 上会出现卡顿、抖动现象
    - setTimeout 的执行时间并不是确定的。
    - 刷新频率受屏幕分辨率和屏幕尺寸影响，不同设备的屏幕刷新率可能不同，
    - setTimeout 只能设置固定的时间间隔，这个时间和屏幕刷新间隔可能不同
    - 以上两种情况都会导致 setTimeout 的执行步调和屏幕的刷新步调不一致，从而引 起丢帧现象。
  - 使用 requestAnimationFrame 执行动画，最大优势是能保证回调函数在屏幕每一次刷 新间隔中只被执行一次，这样就不会引起丢帧，动画也就不会卡顿。
- 节约资源，节省电源
