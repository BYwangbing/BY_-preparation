> https://blog.csdn.net/zgrkaka/article/details/79650804
## 共同点： 
+ 都是循环遍历数组中的每一项 只能遍历数组
+ forEach() 和 map() 里面每一次执行匿名函数都支持3个参数：数组中的当前项item,当前项的索引index,原始数组array
+ 匿名函数中的this都是指Window
## 不同点：
+ forEach() 没有返回值 会对原来的数组产生改变 不可链式调用
+ map() 有返回值，可以return 出来 不会对原来的数组产生改变

## jQuery $.each()和$.map()遍历
+ 即可遍历数组，又可遍历对象
+ $.each() 没有返回值
+ $.each() 里面的匿名函数支持2个参数：当前项的索引i，数组中的当前项n。
+ $.each() 如果遍历的是对象，k 是键，n 是值。
+ $.map() 有返回值，可以return 出来
+ $.map() 里面的匿名函数支持2个参数和$.each()里的参数位置相反：数组中的当前项n，当前项的索引i
+ $.map() 如果遍历的是对象，i 是值，n 是键。
+ 如果是`$("span").map()`形式，参数顺序和`$.each()  $("span").each()`一样。