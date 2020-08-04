/*
节流: throttle
防抖：debounce
 */

/* 函数节流 */
function throttle(func, wait) {
    let timeout = null;
    return () => {
        let _self = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(_self, args)
            }, wait)
        }
    }
}

function _throttle(func, wait) {
    let prev = 0;
    return function () {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - prev > wait) {
            func.apply(context, args);
            prev = now;
        }
    }
}


/* 函数防抖 */
/*
设置一个定时器，约定在xx毫秒后再触发事件处理，每次触发事件都会重新设置计时器，直到xx毫秒内无第二次操作
 */
function debounce(func, wait) {
    let timeout = null;
    return () => {
        let _self = this;
        let args = arguments;
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            func.apply(_self, args)
        }, wait)
    }
}

// 函数防抖
let timer = false;
document.getElementById("debounce").onscroll = function () {
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
    timer = setTimeout(function () {
        console.log("函数防抖");
    }, 300);
};

// 函数节流
let canRun = true;
document.getElementById("throttle").onscroll = function () {
    if (!canRun) {
        // 判断是否已空闲，如果在执行中，则直接return
        return;
    }
    canRun = false;
    setTimeout(function () {
        console.log("函数节流");
        canRun = true;
    }, 300);
};