async和await 是es7的特性，是从promise 里面延伸出来的新语法糖  他会将异步操作修改成同步操作，并且代码看起来更优雅 

async+await是es7提出来的概念，它也是为了解决回调地狱的问题，它只是一种语法糖，从本质上讲，await函数仍然是promise，

async关键字代表后面的函数中有异步操作，await表示等待一个异步方法执行完成。声明异步函数只需在普通函数前面加一个关键字async即可

async 函数返回一个Promise对象（如果指定的返回值不是Promise对象，也返回一个Promise，只不过立即 resolve ，处理方式同 then 方法），因此 async 函数通过 return 返回的值，会成为 then 方法中回调函数的参数：

单独一个 async 函数，其实与Promise执行的功能是一样的

await 就是异步等待，它等待的是一个Promise，因此 await 后面应该写一个Promise对象，如果不是Promise对象，那么会被转成一个立即 resolve 的Promise
 
async 函数被调用后就立即执行，但是一旦遇到 await 就会先返回，等到异步操作执行完成，再接着执行函数体内后面的语句
 
async函数调用不会造成代码的阻塞，但是await会引起async函数内部代码的阻塞。

