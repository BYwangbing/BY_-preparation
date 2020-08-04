### 1. 事件修饰符
+ .stop **阻止点击事件冒泡** 等同于JavaScript中的`event.stopPropagation()`
+ .prevent 防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播），等同于JavaScript中的event.preventDefault()，<br />
+ .prevent 用于取消默认事件 等同于JavaScript的`event.preventDefault()`。
+ .capture 与事件冒泡的方向相反，事件捕获由外到内,捕获事件
+ .self 只会触发自己范围内的事件，不包含子元素
+ .once 只执行一次，如果我们在@click事件上添加.once修饰符，只要点击按钮只会执行一次。
+ .passive 会告诉浏览器你不想阻止事件的默认行为 .passive 修饰符尤其能够提升移动端的性能

.stop:阻止冒泡.
prevent:阻止默认行为
.self:仅绑定元素自身触发
.once: 2.1.4 新增,只触发一次
passive: 2.3.0 新增,滚动事件的默认行为 (即滚动行为) 将会立即触发,不能和.prevent 一起使用
.sync 修饰符


### 2. 表单修饰符
可以给 v-model 添加 .lazy/.trim/.number 修饰符
+ .lazy 在改变后才触发（也就是说只有光标离开input输入框的时候值才会改变）<br />
在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步, 可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步
+ .trim 自动过滤用户输入的首尾空格
+ .number 将输出字符串转为Number类型·（虽然type类型定义了是number类型，但是如果输入字符串，输出的是string）
### 3. 键盘修饰符
+ .enter：回车键 
+ .tab：制表键
+ .delete：含delete和backspace键
+ .esc：返回键
+ .space: 空格键
+ .up：向上键
+ .down：向下键
+ .left：向左键
+ .right：向右键
### 4. 系统修饰键
+ .ctrl
+ .alt
+ .shift
+ .meta

注意： 
1. 在 Mac 系统键盘上，meta 对应 command 键 (⌘)
2.  在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)
3.  在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)
### 5. 鼠标按钮修饰符
+ .left 左键点击
+ .right 右键点击
+ .middle 中键点击